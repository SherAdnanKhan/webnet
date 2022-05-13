<?php

namespace App\Http\Requests\Company;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'manufacturer' => 'string',
            'products' => 'string',
            'num_of_employee' => 'int',
            'country' => 'string',
            'property' => 'boolean',
            'certification' => 'string',
            'market' => 'string',
            'contact_link' => 'string',
            'distance' => 'string',
        ];
    }
}
