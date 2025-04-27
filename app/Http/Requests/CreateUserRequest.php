<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Validation\Rules\Password;
use mysql_xdevapi\Exception;
use Symfony\Component\HttpFoundation\Response;

class CreateUserRequest extends FormRequest
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
            'first_name' => 'required|string|min:3|max:255',
            'last_name' => 'required|string',
            'email' => 'required|email|max:255|unique:users,email',
            'password' => ['required', Password::min(8)->mixedCase()->numbers()->uncompromised()],
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
