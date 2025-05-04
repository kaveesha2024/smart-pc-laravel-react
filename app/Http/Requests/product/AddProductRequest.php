<?php

namespace App\Http\Requests\product;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpFoundation\Response;

class AddProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
//        $response = Auth::user();
//        Log::info($response);
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'product_name' => 'required|string|min:2',
            'description' => 'string:min:2|max:255',
            'price' => 'required|decimal:0,2|min:1',
            'image' => 'required',
            'category' => 'required|in:laptop,mobile,desktop,accessories',
            'brand' => 'string|Max:255',
            'quantity' => 'required|integer|min:1',
            'status' => 'in:in stock,out of stock',
            'long_description' => 'max:1000',
            'ram' => 'required|in:4GB,8GB,16GB,32GB,64GB',
            'processor' => 'required|in:Intel,AMD',
            'storage' => 'required|in:128GB,256GB,512GB,1TB,2TB,4TB,8TB',
            'graphics' => 'required|in:Nvidia,AMD',
            'storage_type' => 'required|in:SSD,HDD,NVME',
            'display' => 'required|in:IPS,LED,LCD,OLED',
            'color' => 'required|string|max:255',
            'screen_size' => 'required|string|max:255',
            'operating_system' => 'required|string|max:255',
            'battery' => 'required|string|max:255',
        ];
    }

    public function failedValidation(Validator $validator)
    {
        $response = response()->json([
            'status' => Response::HTTP_UNPROCESSABLE_ENTITY,
            'errors' => $validator->errors(),
        ]);
        throw new HttpResponseException($response);
    }
}
