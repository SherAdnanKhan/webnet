<?php

namespace App\Http\Requests\Company;

use Illuminate\Foundation\Http\FormRequest;

class CreateRequest extends FormRequest
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
            'manufacture' => 'required|string',
            'products' => 'required|string',
            'number_of_employeer' => 'required',
            'country' => 'required|string',
            'property' => 'required|string',
            'certification' => 'string',
            'main_market' => 'required|string',
            'contact_link' => 'required|string',
            'distance' => 'required|string',
            'extra_info'=>'required|string',
        ];
    }
}
