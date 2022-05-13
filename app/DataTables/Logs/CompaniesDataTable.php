<?php

namespace App\DataTables\Logs;

use App\Models\Company;
use Spatie\Activitylog\Models\Activity;
use Yajra\DataTables\Html\Column;
use Yajra\DataTables\Services\DataTable;

class CompaniesDataTable extends DataTable
{
    /**
     * Build DataTable class.
     *
     * @param  mixed  $query  Results from query() method.
     *
     * @return \Yajra\DataTables\DataTableAbstract
     */
    public function dataTable($query)
    {
        return datatables()
            ->eloquent($query)
            ->rawColumns(['Manufacture', 'Main Products', 'Number of employeer', 'Country', 'Property (Private/ Public)', 'Certification', 'Main markets', 'Contact link', 'Distance to berlin in km'])
            ->addColumn('action', function (Company $model) {
                return view('pages.log.audit._action-menu', compact('model'));
            });
    }

    /**
     * Get query source of dataTable.
     *
     * @param  Company  $model
     *
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function query(Company $model)
    {
        return $model->newQuery();
    }

    /**
     * Optional method if you want to use html builder.
     *
     * @return \Yajra\DataTables\Html\Builder
     */
    public function html()
    {
        return $this->builder()
            ->setTableId('audit-log-table')
            ->columns($this->getColumns())
            ->minifiedAjax()
            ->stateSave(true)
            ->orderBy(6)
            ->responsive()
            ->autoWidth(false)
            ->parameters([
                'scrollX'      => true,
                'drawCallback' => 'function() { KTMenu.createInstances(); }',
            ])
            ->addTableClass('align-middle table-row-dashed fs-6 gy-5');
    }

    /**
     * Get columns.
     *
     * @return array
     */
    protected function getColumns()
    {
        return [
            Column::make('id')->title('Log ID'),
            Column::make('manufacture')->title(__('Manufacture')),
            Column::make('products')->title(__('Main Products')),
            Column::make('number_of_employeer')->title(__('Number of employeer')),
            Column::make('country')->title(__('Country')),
            Column::make('property')->title(__('Property (Private/ Public)')),
            Column::make('certification')->title(__('Certification')),
            Column::make('main_market')->title(__('Main markets')),
            Column::make('contact_link')->title(__('Contact link')),
            Column::make('distance')->title(__('Distance to berlin in km')),
            Column::computed('action')
                ->exportable(true)
                ->printable(false)
                ->addClass('text-center')
                ->responsivePriority(-1),
        ];
    }

    /**
     * Get filename for export.
     *
     * @return string
     */
    protected function filename()
    {
        return 'DataLogs_'.date('YmdHis');
    }
}
