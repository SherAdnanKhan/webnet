<div class="header-menu-wrapper header-menu-wrapper-left" id="kt_header_menu_wrapper">
    <div class="container">
        <!--begin::Header Menu-->
        <div id="kt_header_menu" class="header-menu header-menu-left header-menu-mobile header-menu-layout-default header-menu-root-arrow">
            <!--begin::Header Nav-->
            <ul class="menu-nav">
                <li class="menu-item menu-item-open menu-item-here menu-item-submenu menu-item-rel menu-item-open menu-item-here" data-menu-toggle="click" aria-haspopup="true">
                    <a href="{{ url('log/audit') }}" class="menu-link">
                        <span class="menu-text">Dashboard</span>
                    </a>
                </li>
                @hasexactroles('admin')
                <li class="menu-item menu-item-open menu-item-here menu-item-submenu menu-item-rel menu-item-open menu-item-here" data-menu-toggle="click" aria-haspopup="true">
                    <a href="{{ url('companies') }}" class="menu-link">
                        <span class="menu-text">Create Company</span>
                    </a>
                </li>
                <li class="menu-item menu-item-open menu-item-here menu-item-submenu menu-item-rel menu-item-open menu-item-here" data-menu-toggle="click" aria-haspopup="true">
                    <a href="{{ url('companies') }}" class="menu-link">
                        <span class="menu-text">Companies bulk import</span>
                    </a>
                </li>
                @endhasexactroles
            </ul>
            <!--end::Header Nav-->
        </div>
        <!--end::Header Menu-->
    </div>
</div>