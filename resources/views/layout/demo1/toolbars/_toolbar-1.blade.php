<!--begin::Toolbar-->
<div class="toolbar" id="kt_toolbar">
    <!--begin::Container-->
    <div id="kt_toolbar_container" class="{{ theme()->printHtmlClasses('toolbar-container', false) }} d-flex flex-stack">
        @if (theme()->getOption('layout', 'page-title/display') && theme()->getOption('layout', 'header/left') !== 'page-title')
            {{ theme()->getView('layout/page-title/_default') }}
        @endif
    </div>
    <!--end::Container-->
</div>
<!--end::Toolbar-->
