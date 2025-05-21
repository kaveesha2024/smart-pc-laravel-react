<?php

namespace App\Http\Requests\Product;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Symfony\Component\HttpFoundation\Response;

class UpdateProductRequest extends FormRequest
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
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "productId" => "required|exists:products,product_id",
            "product_name" => "required|string|max:255",
            "description" => "required|string",
            "card_description" => "required|string",
            "price" => "required|decimal:0,2",
            "quantity" => "required|integer",
            "labelled_price" => "required|decimal:0,2",
            "product_images" => "required|string",
        ];
    }
    protected function failedValidation(Validator $validator)
    {
        $response =response()->json([
            'status' => Response::HTTP_UNPROCESSABLE_ENTITY,
            'errors' => $validator->errors(),
        ]) ;
        throw new HttpResponseException($response);
    }
}
