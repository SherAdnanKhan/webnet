<?php

namespace App\Http\Controllers\Companies;

use DataTables;
use App\Models\Company;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Spatie\Permission\Models\Role;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Response;
use App\Http\Requests\Company\CreateRequest;
use App\Http\Requests\Company\ImportRequest;
use App\Http\Requests\Company\UpdateRequest;
use Illuminate\Validation\ValidationException;
use Auth;
class CompanyController extends Controller
{
    public $role;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $info = auth()->user()->info;
        return view('pages.account.companies.create', compact('info'));
    }

    public function getCompanies(Request $request)
    {
        $this->role= Auth::user()->getRoleNames()->toArray();
        if ($request->ajax()) {
            
            $data = Company::select('*');
            return Datatables::of($data)
           
                ->addIndexColumn()
                ->filter(function ($instance) use ($request) {
                    if ($request->ISO9001 == 'ISO9001' && $request->CE == '' && $request->ETL == '') {
                        $instance->where(function ($w) use ($request) {
                            $w->orWhere('certification', 'LIKE', "%$request->ISO9001%");
                        });
                    }
                    if ($request->ISO9001 == '' && $request->CE == 'CE' && $request->ETL == '') {
                        $instance->where(function ($w) use ($request) {
                            $w->orWhere('certification', 'LIKE', "%$request->CE%");
                        });
                    }
                    if ($request->ISO9001 == '' && $request->CE == '' && $request->ETL == 'ETL') {
                        $instance->where(function ($w) use ($request) {
                            $w->orWhere('certification', 'LIKE', "%$request->ETL%");
                        });
                    }
                    if ($request->ISO9001 == 'ISO9001' && $request->CE == 'CE' && $request->ETL == '') {
                        $instance->where(function ($w) use ($request) {
                            $w->orWhere('certification', 'LIKE', "%$request->ISO9001%")
                            ->orWhere('certification', 'LIKE', "%$request->CE%");
                        });
                    }
                    if ($request->ISO9001 == 'ISO9001' && $request->CE == '' && $request->ETL == 'ETL') {
                        $instance->where(function ($w) use ($request) {
                            $w->orWhere('certification', 'LIKE', "%$request->ISO9001%")
                            ->orWhere('certification', 'LIKE', "%$request->ETL%");
                        });
                    }
                    if ($request->ISO9001 == '' && $request->CE == 'CE' && $request->ETL == 'ETL') {
                        $instance->where(function ($w) use ($request) {
                            $w->orWhere('certification', 'LIKE', "%$request->CE%")
                            ->orWhere('certification', 'LIKE', "%$request->ETL%");
                        });
                    }
                    if ($request->ISO9001 == 'ISO9001' && $request->CE == 'CE' && $request->ETL == 'ETL') {
                        $instance->where(function ($w) use ($request) {
                            $w->orWhere('certification', 'LIKE', "%$request->ISO9001%")
                                ->orWhere('certification', 'LIKE', "%$request->CE%")
                                ->orWhere('certification', 'LIKE', "%$request->ETL%");
                        });
                    }
                    if ($request->distance == 'veryclose') {
                        $instance->where(function ($w) use ($request) {
                            $w->Where('distance','>=',0)->Where('distance','<=',1000);
                        });
                    }
                    elseif ($request->distance == 'ineurope') {
                        $instance->where(function ($w) use ($request) {
                            $w->Where('distance','>=',0)->Where('distance','<=',2300);
                        });
                    }
                    if ($request->distance == 'worldwide') {
                        $instance->where(function ($w) use ($request) {
                            $w->select('disatance');
                        });
                    }
                    if (!empty($request->get('search'))) {
                        $instance->where(function ($w) use ($request) {
                            $search = $request->get('search');
                            $w->orWhere('products', 'LIKE', "%{$search}%")
                            ->orWhere('manufacture', 'LIKE', "%{$search}%")
                                ->orWhere('number_of_employeer', 'LIKE', "%{$search}%")
                                ->orWhere('country', 'LIKE', "%{$search}%")
                                ->orWhere('property', 'LIKE', "%{$search}%")
                                ->orWhere('certification', 'LIKE', "%{$search}%")
                                ->orWhere('main_market', 'LIKE', "%{$search}%")
                                ->orWhere('contact_link', 'LIKE', "%{$search}%")
                                ->orWhere('distance', 'LIKE', "%{$search}%");
                        });
                    }
                    if (!empty($request->get('products'))) {
                        $instance->where(function ($w) use ($request) {
                            $products = $request->get('products');
                            $w->orWhere('products', 'LIKE', "%{$products}%");
                        });
                    }
                    if (!empty($request->get('country'))) {
                        $instance->where(function ($w) use ($request) {
                            $country = $request->get('country');
                            $w->orWhere('country', 'LIKE', "%{$country}%");
                        });
                    }
                })
                ->rawColumns(['certificate'])
                ->addColumn('news', function($w) {
                  return $w->news;
                })
                ->rawColumns(['news'])
                ->addColumn('action', function($w){
                    if (in_array('admin',$this->role)) {
                    $btn = '<a href="'. route("company.edit",$w->id) .'" class="edit btn btn-primary btn-sm">Edit</a>';
                    $btn .= '<a href="'. route("company.delete",$w->id) .'" class="edit btn btn-danger btn-sm">Delete</a>';
                    }
                    else{
                        $btn="";
                    }
                    return $btn;
                    
                     })
             ->rawColumns(['action'])
             ->make(true);
               
        }

        return view('pages.log.audit.index');
    }
    public function guestCompany(Request $request){
        if ($request->ajax()) {
            
            $data = Company::select('*');
          
            return Datatables::of($data)
           
                ->addIndexColumn()
                ->filter(function ($instance) use ($request) {
                    if ($request->ISO9001 == 'ISO9001' && $request->CE == '' && $request->ETL == '') {
                        $instance->where(function ($w) use ($request) {
                            $w->orWhere('certification', 'LIKE', "%$request->ISO9001%");
                        });
                    }
                    if ($request->ISO9001 == '' && $request->CE == 'CE' && $request->ETL == '') {
                        $instance->where(function ($w) use ($request) {
                            $w->orWhere('certification', 'LIKE', "%$request->CE%");
                        });
                    }
                    if ($request->ISO9001 == '' && $request->CE == '' && $request->ETL == 'ETL') {
                        $instance->where(function ($w) use ($request) {
                            $w->orWhere('certification', 'LIKE', "%$request->ETL%");
                        });
                    }
                    if ($request->ISO9001 == 'ISO9001' && $request->CE == 'CE' && $request->ETL == '') {
                        $instance->where(function ($w) use ($request) {
                            $w->orWhere('certification', 'LIKE', "%$request->ISO9001%")
                            ->orWhere('certification', 'LIKE', "%$request->CE%");
                        });
                    }
                    if ($request->ISO9001 == 'ISO9001' && $request->CE == '' && $request->ETL == 'ETL') {
                        $instance->where(function ($w) use ($request) {
                            $w->orWhere('certification', 'LIKE', "%$request->ISO9001%")
                            ->orWhere('certification', 'LIKE', "%$request->ETL%");
                        });
                    }
                    if ($request->ISO9001 == '' && $request->CE == 'CE' && $request->ETL == 'ETL') {
                        $instance->where(function ($w) use ($request) {
                            $w->orWhere('certification', 'LIKE', "%$request->CE%")
                            ->orWhere('certification', 'LIKE', "%$request->ETL%");
                        });
                    }
                    if ($request->ISO9001 == 'ISO9001' && $request->CE == 'CE' && $request->ETL == 'ETL') {
                        $instance->where(function ($w) use ($request) {
                            $w->orWhere('certification', 'LIKE', "%$request->ISO9001%")
                                ->orWhere('certification', 'LIKE', "%$request->CE%")
                                ->orWhere('certification', 'LIKE', "%$request->ETL%");
                        });
                    }
                    if ($request->distance == 'veryclose') {
                        $instance->where(function ($w) use ($request) {
                            $w->Where('distance','>=',0)->Where('distance','<=',1000);
                        });
                    }
                    elseif ($request->distance == 'ineurope') {
                        $instance->where(function ($w) use ($request) {
                            $w->Where('distance','>=',0)->Where('distance','<=',2300);
                        });
                    }
                    if ($request->distance == 'worldwide') {
                        $instance->where(function ($w) use ($request) {
                            $w->select('disatance');
                        });
                    }
                    if (!empty($request->get('search'))) {
                        $instance->where(function ($w) use ($request) {
                            $search = $request->get('search');
                            $w->orWhere('products', 'LIKE', "%{$search}%")
                            ->orWhere('manufacture', 'LIKE', "%{$search}%")
                                ->orWhere('number_of_employeer', 'LIKE', "%{$search}%")
                                ->orWhere('country', 'LIKE', "%{$search}%")
                                ->orWhere('property', 'LIKE', "%{$search}%")
                                ->orWhere('certification', 'LIKE', "%{$search}%")
                                ->orWhere('main_market', 'LIKE', "%{$search}%")
                                ->orWhere('contact_link', 'LIKE', "%{$search}%")
                                ->orWhere('distance', 'LIKE', "%{$search}%");
                        });
                    }
                    if (!empty($request->get('products'))) {
                        $instance->where(function ($w) use ($request) {
                            $products = $request->get('products');
                            $w->orWhere('products', 'LIKE', "%{$products}%");
                        });
                    }
                    if (!empty($request->get('country'))) {
                        $instance->where(function ($w) use ($request) {
                            $country = $request->get('country');
                            $w->orWhere('country', 'LIKE', "%{$country}%");
                        });
                    }
                })
                ->rawColumns(['certificate'])
                ->addColumn('news', function($w) {
                    return $w->news;
                  })
                  ->rawColumns(['news'])
              ->make(true);
               
        }

        return view('pages.log.audit.guest');
    }
  
    public function create()
    {
        $info = auth()->user()->info;

        return view('pages.account.companies.settings', compact('info'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CreateRequest $request)
    { 
        $validated=$request->validated();
        $validated['news']= $request->news ;
      
        Company::create($validated);
        $notification = array(
            'message' => 'Company created successfully!',
            'alert-type' => 'success'
        );
        return back()->with($notification);
    }

    public function import(ImportRequest $request)
    {
        $row = $this->spreadsheet_to_array($request->csv_file);

        DB::beginTransaction();
        try {
            for ($i = 1; $i < count($row); $i++) {
                $data = [
                    'manufacture' => $row[$i][0],
                    'products' => $row[$i][1],
                    'number_of_employeer' => $row[$i][2],
                    'country' => $row[$i][3],
                    'property' => $row[$i][4],
                    'certification' => $row[$i][5],
                    'main_market' => $row[$i][6],
                    'contact_link' => $row[$i][7],
                    'distance' => $row[$i][8],
                ];
                if (!empty($row[$i][0])) {
                    Company::create($data);
                }
            }
            DB::commit();
        } catch (\Exception $e) {
            DB::rollback();
            dd($e);
            $notification = array(
                'message' => 'Please only import excel/Xlsx file!',
                'alert-type' => 'failure'
            );
            return back()->with($notification);
        }
        $notification = array(
            'message' => 'Companies file imported successfully!',
            'alert-type' => 'success'
        );
        return back()->with($notification);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($draw)
    {
       $companies=Company::where('id',$draw)->first();
       return view('pages.account.companies.edit',get_defined_vars());
    }

    public function update(Request $request,$id)
    {
        // dd($request->all());
       Company::where('id',$id)->update([
        'manufacture' =>$request->manufacture,
        'products' => $request->products,
        'number_of_employeer' =>$request->number_of_employeer,
        'country' => $request->country,
        'property' =>$request->property,
        'certification' => $request->certification,
        'main_market' =>$request->main_market,
        'contact_link' => $request->contact_link,
        'distance' => $request->distance,
       ]);
       $notification = array(
        'message' => 'Company updated successfully!',
        'alert-type' => 'success'
    );
       return redirect()->back()->with($notification);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
   
    public function destroy($id)
    {
                  
        $company=Company::where('id',$id)->delete();

        return redirect()->back();
    }

    public function getDownload()
    {
        //PDF file is stored under project/public/download/info.pdf
        $file = public_path() . "/First companies.xlsx";

        $headers = array(
            'Content-Type: application/xlsx',
        );
        return Response::download($file, 'companies.xlsx', $headers);
    }


    function spreadsheet_to_array($file, $nullValue = null, $calculateFormulas = true, $formatData = false)
    {
        $results = [];
        $spreadsheet = \PhpOffice\PhpSpreadsheet\IOFactory::load($file);
        foreach ($spreadsheet->getWorksheetIterator() as $worksheet) {
            $results = $worksheet->toArray($nullValue, $calculateFormulas, $formatData);
        }
        // save memory
        $spreadsheet->__destruct();
        $spreadsheet = NULL;
        unset($spreadsheet);
        return $results;
    }
    public function getProductkey(Request $request){
        $data=$request->get_data;
        $b=Company::where('products', 'LIKE', "%$data%")->first();
        if(is_null($b)){
            return '';
        }
        else
        {
            
            return $b->extra_info;
        }
    }
 
}
