<x-base--layout>
    <!--begin::Basic info-->
    <div class="card">
        <!--begin::Card header-->
        <div class="card-header border-0 cursor-pointer" role="button" data-bs-toggle="collapse"
            data-bs-target="#kt_account_profile_details" aria-expanded="true"
            aria-controls="kt_account_profile_details">
            <!--begin::Card title-->
            <div class="card-title m-0">
                <h3 class="fw-bolder m-0">{{ __('Company Details') }}</h3>
            </div>
            <!--end::Card title-->
        </div>
        <!--begin::Card header-->

        <!--begin::Content-->
        <div id="kt_account_profile_details" class="collapse show">
            <!--begin::Form-->
            <form id="kt_account_profile_details_form" class="form" method="POST"
                action="{{ route('company.store') }}" enctype="multipart/form-data">
                @csrf
                <!--begin::Card body-->
                <div class="card-body border-top p-9">

                    <!--begin::Input group-->
                    <div class="row mb-6">
                        <!--begin::Label-->
                        <label class="col-lg-4 col-form-label fw-bold fs-6">{{ __('Manufacture') }}</label>
                        <!--end::Label-->

                        <!--begin::Col-->
                        <div class="col-lg-8 fv-row">
                            <input type="text" name="manufacture" class="form-control form-control-lg form-control-solid"
                                placeholder="Manufacture" value="{{ old('manufacture', $info->Manufacture ?? '') }}" />
                        </div>
                        <!--end::Col-->
                    </div>
                    <!--end::Input group-->

                    <!--begin::Input group-->
                    <div class="row mb-6">
                        <!--begin::Label-->
                        <label class="col-lg-4 col-form-label fw-bold fs-6">
                            <span class="required">{{ __('Main Products') }}</span>

                            <i class="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip"
                                title="{{ __('Main Products must be active') }}"></i>
                        </label>
                        <!--end::Label-->

                        <!--begin::Col-->
                        <div class="col-lg-8 fv-row">
                            <input type="tel" name="products" class="form-control form-control-lg form-control-solid"
                                placeholder="Main Products" value="{{ old('products', $info->products ?? '') }}" />
                        </div>
                        <!--end::Col-->
                    </div>
                    <!--end::Input group-->

                    <!--begin::Input group-->
                    <div class="row mb-6">
                        <!--begin::Label-->
                        <label class="col-lg-4 col-form-label fw-bold fs-6">{{ __('Number of employeer') }}</label>
                        <!--end::Label-->

                        <!--begin::Col-->
                        <div class="col-lg-8 fv-row">
                            <input type="text" name="number_of_employeer" class="form-control form-control-lg form-control-solid"
                                placeholder="Number of employeer" value="{{ old('number_of_employeer', $info->number_of_employeer ?? '') }}" />
                        </div>
                        <!--end::Col-->
                    </div>
                    <!--end::Input group-->

                    <!--begin::Input group-->
                    <div class="row mb-6">
                        <!--begin::Label-->
                        <label class="col-lg-4 col-form-label fw-bold fs-6">
                            <span class="required">{{ __('Country') }}</span>

                            <i class="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip"
                                title="{{ __('Country of origination') }}"></i>
                        </label>
                        <!--end::Label-->

                        <!--begin::Col-->
                        <div class="col-lg-8 fv-row">
                            <input type="text" name="country" class="form-control form-control-lg form-control-solid"
                                placeholder="Number of country" value="{{ old('country', $info->country ?? '') }}" />
                        </div>
                        <!--end::Col-->
                    </div>
                    <!--end::Input group-->
                    <!--begin::Input group-->
                    <div class="row mb-6">
                        <!--begin::Label-->
                        <label class="col-lg-4 col-form-label fw-bold fs-6">{{ __('Property') }}</label>
                        <!--end::Label-->

                        <!--begin::Col-->
                        <div class="col-lg-8 fv-row">
                            <input type="text" name="property" class="form-control form-control-lg form-control-solid"
                                placeholder="Property" value="{{ old('property', $info->property ?? '') }}" />
                        </div>
                        <!--end::Col-->
                    </div>
                    <!--end::Input group-->

                    <!--begin::Input group-->
                    <div class="row mb-6">
                        <!--begin::Label-->
                        <label class="col-lg-4 col-form-label fw-bold fs-6">
                            <span class="required">{{ __('Certification') }}</span>

                            <i class="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip"
                                title="{{ __('certification must be active') }}"></i>
                        </label>
                        <!--end::Label-->

                        <!--begin::Col-->
                        <div class="col-lg-8 fv-row">
                            <input type="tel" name="certification" class="form-control form-control-lg form-control-solid"
                                placeholder="Certification" value="{{ old('certification', $info->certification ?? '') }}" />
                        </div>
                        <!--end::Col-->
                    </div>
                    <!--end::Input group-->

                    <!--begin::Input group-->
                    <div class="row mb-6">
                        <!--begin::Label-->
                        <label class="col-lg-4 col-form-label fw-bold fs-6">{{ __('Main markets') }}</label>
                        <!--end::Label-->

                        <!--begin::Col-->
                        <div class="col-lg-8 fv-row">
                            <input type="text" name="main_market" class="form-control form-control-lg form-control-solid"
                                placeholder="Main markets" value="{{ old('main_market', $info->main_market ?? '') }}" />
                        </div>
                        <!--end::Col-->
                    </div>
                    <!--end::Input group-->

                    <!--begin::Input group-->
                    <div class="row mb-6">
                        <!--begin::Label-->
                        <label class="col-lg-4 col-form-label fw-bold fs-6">
                            <span class="required">{{ __('Contact link') }}</span>

                            <i class="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip"
                                title="{{ __('Contact link') }}"></i>
                        </label>
                        <!--end::Label-->

                        <!--begin::Col-->
                        <div class="col-lg-8 fv-row">
                            <input type="text" name="contact_link" class="form-control form-control-lg form-control-solid"
                                placeholder="Contact link" value="{{ old('contact_link', $info->contact_link ?? '') }}" />
                        </div>
                        <!--end::Col-->
                    </div>
                    <div class="row mb-6">
                        <!--begin::Label-->
                        <label class="col-lg-4 col-form-label fw-bold fs-6">
                            <span class="required">{{ __('Distance to berlin in km') }}</span>

                            <i class="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip"
                                title="{{ __('Distance to berlin in km') }}"></i>
                        </label>
                        <!--end::Label-->

                        <!--begin::Col-->
                        <div class="col-lg-8 fv-row">
                            <input type="text" name="distance" class="form-control form-control-lg form-control-solid"
                                placeholder="Distance to berlin in km" value="{{ old('distance', $info->distance ?? '') }}" />
                        </div>
                        <!--end::Col-->
                    </div>
                    <div class="row mb-6">
                        <!--begin::Label-->
                        <label class="col-lg-4 col-form-label fw-bold fs-6">
                            <span class="required">{{ __('Extra Info') }}</span>

                            <i class="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip"
                                title="{{ __('Extra Info') }}"></i>
                        </label>
                        <!--end::Label-->

                        <!--begin::Col-->
                        <div class="col-lg-8 fv-row">
                            <input type="text" name="extra_info" class="form-control form-control-lg form-control-solid"
                                placeholder="Extra Information" value="{{ old('extra_info', $info->extra_info ?? '') }}" />
                        </div>
                        <!--end::Col-->
                    </div>
                    <div class="row mb-6">
                        <!--begin::Label-->
                        <label class="col-lg-4 col-form-label fw-bold fs-6">
                            <span>{{ __('News') }}</span>
                        </label>
                        <!--end::Label-->

                        <!--begin::Col-->
                        <div class="col-lg-8 fv-row">
                            <input type="text" name="news" class="form-control form-control-lg form-control-solid"
                                placeholder="news" value="{{ old('news', $info->news ?? '') }}" />
                        </div>
                        <!--end::Col-->
                    </div>
                    <!--end::Input group-->
                </div>
                <!--end::Card body-->

                <!--begin::Actions-->
                <div class="card-footer d-flex justify-content-end py-6 px-9">
                    <button type="reset"
                        class="btn btn-white btn-active-light-primary me-2">{{ __('Discard') }}</button>

                    <button type="submit" class="btn btn-primary" id="kt_account_profile_details_submit">
                        @include('partials.general._button-indicator', [
                            'label' => __('Save Changes'),
                        ])
                    </button>
                </div>
                <!--end::Actions-->
            </form>
            <!--end::Form-->
        </div>
        <!--end::Content-->
    </div>
    <!--end::Basic info-->



    </x-base-layout>
    <!--begin::Basic info-->
