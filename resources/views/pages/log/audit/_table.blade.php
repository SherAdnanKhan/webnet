<!--begin::Table-->
<div class="container mt-4">
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="d-flex align-items-center mt-3">
                    <label class="form-check form-check-inline form-check-solid me-5">
                        <span class="fw-bold ps-2 fs-6">
                            Certifications:
                        </span>
                    </label>
                    <!--begin::Option-->
                    <label class="form-check form-check-inline form-check-solid me-5">
                        <input class="form-check-input" id="ISO9001" name="ISO9001" type="checkbox" value="ISO9001">
                        <span class="fw-bold ps-2 fs-6">
                            ISO9001
                        </span>
                    </label>
                    <!--end::Option-->

                    <!--begin::Option-->
                    <label class="form-check form-check-inline form-check-solid">
                        <input class="form-check-input" id="CE" name="CE" type="checkbox" value="CE">
                        <span class="fw-bold ps-2 fs-6">
                            CE
                        </span>
                    </label>
                    <!--end::Option-->

                    <!--begin::Option-->
                    <label class="form-check form-check-inline form-check-solid">
                        <input class="form-check-input" id="ETL" name="ETL" type="checkbox" value="ETL">
                        <span class="fw-bold ps-2 fs-6">
                            ETL
                        </span>
                    </label>
                    <!--end::Option-->
                </div>
            </div>
            <table class="table table-bordered data-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Manufacture</th>
                        <th>Main Products</th>
                        <th>Main Products</th>
                        <th>Country</th>
                        <th>Property (Private/ Public)</th>
                        <th>Certification</th>
                        <th>Main markets</th>
                        <th>Contact link</th>
                        <th>Distance to berlin in km</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
    </div>
</div>
<!--end::Table-->

{{-- Inject Scripts --}}
@section('scripts')
    <script type="text/javascript">
        $(function() {

            var table = $('.data-table').DataTable({
                processing: true,
                serverSide: true,
                ajax: {
                    url: "{{ route('get-companies') }}",
                    data: function(d) {
                        console.log(d);
                        d.ISO9001 = $('#ISO9001').is(":checked") ? $('#ISO9001').val() : '',
                            d.CE = $('#CE').is(":checked") ? $('#CE').val() : '',
                            d.ETL = $('#ETL').is(":checked") ? $('#ETL').val() : '',
                            d.search = $('input[type="search"]').val()
                    }
                },
                columns: [{
                        data: 'id',
                        name: 'id'
                    },
                    {
                        data: 'manufacture',
                        name: 'manufacture'
                    },
                    {
                        data: 'products',
                        name: 'products'
                    },
                    {
                        data: 'number_of_employeer',
                        name: 'number_of_employeer'
                    },
                    {
                        data: 'country',
                        name: 'country'
                    },
                    {
                        data: 'property',
                        name: 'property'
                    },
                    {
                        data: 'certification',
                        name: 'certification'
                    },
                    {
                        data: 'main_market',
                        name: 'main_market'
                    },
                    {
                        data: 'contact_link',
                        name: 'contact_link'
                    },
                    {
                        data: 'distance',
                        name: 'distance'
                    },
                ]
            });

            $('#ISO9001').change(function() {
                table.draw();
            });
            $('#CE').change(function() {
                table.draw();
            });
            $('#ETL').change(function() {
                table.draw();
            });

        });
    </script>
@endsection
