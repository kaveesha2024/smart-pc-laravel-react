<?php

namespace App\Http\Requests\Product;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Symfony\Component\HttpFoundation\Response;

class AddProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
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
        'product_name' => 'required|string|max:255',
        'description' => 'required|string',
        'price' => 'required|decimal:0,2',
        'labelled_price' => 'required|decimal:0,2',
        'quantity' => 'required|integer',
        'card_description' => 'required|string',
        'product_images' => 'required|string',
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
