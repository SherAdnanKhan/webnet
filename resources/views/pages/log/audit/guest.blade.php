@extends('layouts.app')
@section('title')
<title>Hallo | Hallo</title>
@endsection

@section('content')
<div class="main d-flex flex-column flex-row-fluid">					
	<div class="content flex-column-fluid" id="kt_content">
		<!--begin::Dashboard-->
		<!--begin::Row-->
			<div class="card card-custom gutter-b card-stretch" style="border-radius: 0px;">
				<!--begin::Body-->
				<div class="card-body pt-4 pl-4">
					<div class="row">
						<div class="col-md-2">
							<div class="row">
								<div class="col-md-8">
									<h3>Filters</h3>
								</div>
								<div class="col-md-4 pt-1">
									<a  >Clear</a>
								</div>
							</div>
							<hr class="mt-0">
							<div class="row">
								<div class="col-md-12">
									<a href="">
										<i class="flaticon2-pen" style="color: #8950FC;"></i> EDIT TERRITORY
									</a>
								</div>
							</div>
							<hr class="mb-0">
							<div class="row">
								<div class="col-md-12">
									<div class="accordion accordion-light  accordion-toggle-arrow" id="accordionExample5">
										<div class="card">
											<div class="card-header" id="headingOne5" >
												<div class="card-title" data-toggle="collapse" data-target="#collapseOne5" style="box-shadow: 0 4px 2px -2px grey;">
													<i class="fa fa-search"></i> Overview
												</div>
											</div>
											<div id="collapseOne5" class="collapse show" data-parent="#accordionExample5">
												<div class="card-body">
													<div class="row">
														<div class="col-md-12 mt-3">
															<span>Product</span>
														</div>
														<div class="col-md-12 ">
															<input class="form-control" id="product-search" placeholder="E.g 'RegTech' Account">
														</div>
														<div class="col-md-12 mt-3">
															<span>Certification</span>
														</div>
														<div class="col-md-12 mt-2">
															<div class="checkbox-list">
																<label class="checkbox checkbox-outline checkbox-outline-2x checkbox-primary">
																	<input type="checkbox" name="Checkboxes16" id="ISO9001" name="ISO9001" value="ISO9001"/>
																	<span></span>
																	ISO9001
																</label>
																<label class="checkbox checkbox-outline checkbox-outline-2x checkbox-primary">
																	<input type="checkbox" name="Checkboxes16" id="CE" name="CE" value="CE"/>
																	<span></span>
																	CE
																</label>
																<label class="checkbox checkbox-outline checkbox-outline-2x checkbox-primary">
																	<input type="checkbox" name="Checkboxes16" id="ETL" name="ETL" value="ETL"/>
																	<span></span>
																	ETL
																</label>
															</div>
														</div>
														<div class="col-md-12 mt-3">
															<span>Country</span>
														</div>
														<div class="col-md-12 ">
															<input class="form-control" id="country-search" placeholder="E.g USA">
														</div>
														<div class="col-md-12 mt-3">
															<span>Distance</span>
														</div>
														<div class="col-md-12 mt-2">
															<div class="form-check">
																<input class="form-check-input distance" type="radio" name="distance" value="veryclose" >
																<label class="form-check-label" for="flexRadioDefault1">
																 very close
																</label>
															  </div>
															  <div class="form-check">
																<input class="form-check-input distance" type="radio" name="distance" value="ineurope">
																<label class="form-check-label" for="flexRadioDefault2">
																 in europe
																</label>
															  </div>
															  <div class="form-check">
																<input class="form-check-input distance" type="radio" name="distance" value="worldwide">
																<label class="form-check-label" for="flexRadioDefault2">
																 world wide
																</label>
															  </div>
														</div>
														<div class="col-md-12 mt-3">
															<span>Recomendation Field</span>
														</div>
														<div class="col-md-12 mt-2">
															<div>
																<p id="recomendation_field"></p>
															  </div>
															 
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-10">
							<div class="table table-responsive">
								<table class="table table-bordered data-table">
									<thead>
										<tr>
											<th>ID</th>
											<th>Manufacture</th>
											<th>Main Products</th>
											<th>Number of Employeer</th>
											<th>Country</th>
											<th>Property (Private/ Public)</th>
											<th>Certification</th>
											<th>Main markets</th>
											<th>Contact link</th>
											<th>Distance to berlin in km</th>
											<th>News</th>
										</tr>
									</thead>
									<tbody>
									</tbody>
								</table>
							</div>
							
						</div>
					</div>
				</div>
				<!--end::Body-->
			</div>
		<!--end::Row-->
		<!--end::Dashboard-->
	</div>
	<!--end::Content-->
</div>
@endsection
@section('page-scripts')
<script type="text/javascript">
	$(function() {

		var table = $('.data-table').DataTable({
			processing: true,
			serverSide: true,
			"pageLength": 10,
			"bLengthChange": false,
			"bFilter": false,
			ajax: {
				url: "{{ route('guest-company') }}",
				data: function(d) {
						console.log(d);
						d.ISO9001 = $('#ISO9001').is(":checked") ? $('#ISO9001').val() : '',
						d.CE = $('#CE').is(":checked") ? $('#CE').val() : '',
						d.ETL = $('#ETL').is(":checked") ? $('#ETL').val() : '',
						d.search = $('#general-search').val(),
						d.products = $('#product-search').val(),
						d.country = $('#country-search').val(),
						d.distance = $('input[name="distance"]:checked').val()
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
				{
					data: 'news',
					name: 'news'
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
		$('#general-search').on('change paste keyup input',function(e) {
			table.draw();
		});
		$('#product-search').on('change paste keyup input',function(e) {
			var get_data=$(this).val();
			console.log('data ',get_data);
			$.ajax({
            type: 'GET',
            url: "{{ url('get-product_key') }}",
			data:{get_data:get_data},

            success: function (resultData) {
            console.log(resultData);
			document.getElementById('recomendation_field').innerHTML =resultData;
			}
        })
			table.draw();
		});
		$('#country-search').on('change paste keyup input',function(e) {
			table.draw();
		});
		$('.distance').on('click',function(e) {
			table.draw();
		});

	});
</script>
@endsection