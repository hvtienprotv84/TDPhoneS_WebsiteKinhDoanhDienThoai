function initMap() {

    // Declare positions to be used
    var chinhanh_3thang2 = { lat: 10.7705, lng: 106.6693 };
    var chinhanh_tinhlo10 = { lat: 10.7580, lng: 106.6037 };
    var chinhanh_dienbienphu = { lat: 10.8018, lng: 106.7094 };
    var chinhanh_khavancan = { lat: 10.8607, lng: 106.7581 };
    var chinhanh_dienbienphu_travinh = { lat: 9.9250, lng: 106.3385 };
    var chinhanh_leloi_travinh = { lat: 9.9514, lng: 106.3386 };
    var chinhanh_nguyendang_travinh = { lat: 9.9246, lng: 106.3342 };
    var chinhanh_nguyenthiminhkhai_travinh = { lat: 9.9278, lng: 106.3282 };


    // Create a new StyledMapType object, passing it an array of styles,
    var styledMapType = new google.maps.StyledMapType(
        [
            { elementType: 'geometry', stylers: [{ color: '#ebe3cd' }] },
            { elementType: 'labels.text.fill', stylers: [{ color: '#523735' }] },
            { elementType: 'labels.text.stroke', stylers: [{ color: '#f5f1e6' }] },
            {
                featureType: 'administrative',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#c9b2a6' }]
            },
            {
                featureType: 'administrative.land_parcel',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#dcd2be' }]
            },
            {
                featureType: 'administrative.land_parcel',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#ae9e90' }]
            },
            {
                featureType: 'landscape.natural',
                elementType: 'geometry',
                stylers: [{ color: '#dfd2ae' }]
            },
            {
                featureType: 'poi',
                elementType: 'geometry',
                stylers: [{ color: '#dfd2ae' }]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#93817c' }]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry.fill',
                stylers: [{ color: '#a5b076' }]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#447530' }]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{ color: '#f5f1e6' }]
            },
            {
                featureType: 'road.arterial',
                elementType: 'geometry',
                stylers: [{ color: '#fdfcf8' }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{ color: '#f8c967' }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#e9bc62' }]
            },
            {
                featureType: 'road.highway.controlled_access',
                elementType: 'geometry',
                stylers: [{ color: '#e98d58' }]
            },
            {
                featureType: 'road.highway.controlled_access',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#db8555' }]
            },
            {
                featureType: 'road.local',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#806b63' }]
            },
            {
                featureType: 'transit.line',
                elementType: 'geometry',
                stylers: [{ color: '#dfd2ae' }]
            },
            {
                featureType: 'transit.line',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#8f7d77' }]
            },
            {
                featureType: 'transit.line',
                elementType: 'labels.text.stroke',
                stylers: [{ color: '#ebe3cd' }]
            },
            {
                featureType: 'transit.station',
                elementType: 'geometry',
                stylers: [{ color: '#dfd2ae' }]
            },
            {
                featureType: 'water',
                elementType: 'geometry.fill',
                stylers: [{ color: '#b9d3c2' }]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#92998d' }]
            }
        ],
        { name: 'Styled Map' });

    // Initialize map
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: chinhanh_3thang2,
        mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain', 'styled_map']
        }
    });

    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');

    // Add clickable markers
    var markerChinhanh_3thang2 = new google.maps.Marker({
        position: chinhanh_3thang2,
        map: map
    });

    var markerChinhanh_tinhlo10 = new google.maps.Marker({
        position: chinhanh_tinhlo10,
        map: map
    });

    var markerChinhanh_dienbienphu = new google.maps.Marker({
        position: chinhanh_dienbienphu,
        map: map
    });

    var markerChinhanh_khavancan = new google.maps.Marker({
        position: chinhanh_khavancan,
        map: map
    });
    var markerChinhanh_dienbienphu_travinh = new google.maps.Marker({
        position: chinhanh_dienbienphu_travinh,
        map: map
    });

    var markerChinhanh_leloi_travinh = new google.maps.Marker({
        position: chinhanh_leloi_travinh,
        map: map
    });

    var markerChinhanh_nguyendang_travinh = new google.maps.Marker({
        position: chinhanh_nguyendang_travinh,
        map: map
    });

    var markerChinhanh_nguyenthiminhkhai_travinh = new google.maps.Marker({
        position: chinhanh_nguyenthiminhkhai_travinh,
        map: map
    });

    markerChinhanh_3thang2.addListener('click', function () {
        infoChinhanh_3thang2.open(map, markerChinhanh_3thang2);
    });
    markerChinhanh_tinhlo10.addListener('click', function () {
        infoChinhanh_tinhlo10.open(map, markerChinhanh_tinhlo10);
    });

    markerChinhanh_dienbienphu.addListener('click', function () {
        infoChinhanh_dienbienphu.open(map, markerChinhanh_dienbienphu);
    });

    markerChinhanh_khavancan.addListener('click', function () {
        infoChinhanh_khavancan.open(map, markerChinhanh_khavancan);
    });

    markerChinhanh_dienbienphu_travinh.addListener('click', function () {
        infoChinhanh_dienbienphu_travinh.open(map, markerChinhanh_dienbienphu_travinh);
    });
    markerChinhanh_leloi_travinh.addListener('click', function () {
        infoChinhanh_leloi_travinh.open(map, markerChinhanh_leloi_travinh);
    });

    markerChinhanh_nguyendang_travinh.addListener('click', function () {
        infoChinhanh_nguyendang_travinh.open(map, markerChinhanh_nguyendang_travinh);
    });

    markerChinhanh_nguyenthiminhkhai_travinh.addListener('click', function () {
        infoChinhanh_nguyenthiminhkhai_travinh.open(map, markerChinhanh_nguyenthiminhkhai_travinh);
    });

    // Define content for info window
    var contentChinhanh_3thang2 = '' +
        '<div id="content" class="content">' +
            '<h2 id="firstHeading" class="firstHeading">TDPhoneS - Chi Nhánh Quận 10</h2>' +
            '<p>Địa Chỉ: 288 Đường 3 Tháng 2, Phường 12, Quận 10, Hồ Chí Minh 700000, Việt Nam</p>' +
            '<a href="https://www.google.com/maps/place/288+%C4%90.+3+Th%C3%A1ng+2,+Ph%C6%B0%E1%BB%9Dng+10,+Qu%E1%BA%ADn+10,+H%E1%BB%93+Ch%C3%AD+Minh,+Vi%E1%BB%87t+Nam/@10.7705637,106.6693644,17z/data=!3m1!4b1!4m6!3m5!1s0x31752ede41f13c9f:0x5ef98e56809a1162!8m2!3d10.7705584!4d106.6719393!16s%2Fg%2F11gf98040d?entry=ttu" target="_blank">Xem Chi Tiết Trên Google Map</a><br/><hr/>' +
            '<img id="logo_chinhanh_googlemap" src="./assets/images/logo_tdphones.png" alt="Workstation"></p>' 
        '</div>'

    var contentChinhanh_tinhlo10 = '' +
        '<div id="content" class="content">' +
            '<h2 id="firstHeading" class="firstHeading">TDPhoneS - Chi Nhánh Quận Bình Tân</h2>' +
            '<p>Địa Chỉ: 888 Đường Tỉnh Lộ 10, Phường Bình Trị Đông A, Quận Bình Tân, Hồ Chí Minh 700000, VN</p>' +
            '<a href="https://www.google.com/maps/place/CellphoneS/@10.7580447,106.6037734,17z/data=!3m1!4b1!4m6!3m5!1s0x31752d5fb143775f:0x8bc1efff0f6b7477!8m2!3d10.7580394!4d106.6063483!16s%2Fg%2F11k059zms_?entry=ttu" target="_blank">Xem Chi Tiết Trên Google Map</a><br/><hr/>' +
            '<img id="logo_chinhanh_googlemap" src="./assets/images/logo_tdphones.png" alt="Workstation"></p>'
        '</div>'

    var contentChinhanh_dienbienphu = '' +
        '<div id="content" class="content">' +
           '<h2 id="firstHeading" class="firstHeading">TDPhoneS - Chi Nhánh Quận Bình Thạnh</h2>' +
           '<p>Địa Chỉ: 379 Đường Điện Biên Phủ, Phường 25, Bình Thạnh, Hồ Chí Minh 700000, Việt Nam</p>' +
           '<a href="https://www.google.com/maps/place/CellphoneS/@10.8018226,106.711975,17z/data=!3m1!4b1!4m6!3m5!1s0x31752995af6406c1:0x4fe1c05456db302b!8m2!3d10.8018226!4d106.711975!16s%2Fg%2F11fqkqqv_s?entry=ttu" target="_blank">Xem Chi Tiết Trên Google Map</a><br/><hr/>' +
           '<img id="logo_chinhanh_googlemap" src="./assets/images/logo_tdphones.png" alt="Workstation"></p>'
        '</div>'

    var contentChinhanh_khavancan = '' +
        '<div id="content" class="content">' +
        '<h2 id="firstHeading" class="firstHeading">TDPhoneS - Chi Nhánh Quận Thủ Đức</h2>' +
        '<p>Địa Chỉ: 943 Đường Kha Vạn Cân, Phường Linh Chiểu, Quận Thủ Đức, Hồ Chí Minh 700000, Việt Nam</p>' +
        '<a href="https://www.google.com/maps/place/CellphoneS/@10.8607194,106.7581545,17z/data=!3m1!4b1!4m6!3m5!1s0x317527d04e7c3209:0x310a74ac62dfa096!8m2!3d10.8607141!4d106.7607294!16s%2Fg%2F11t9dh3ct0?entry=ttu" target="_blank">Xem Chi Tiết Trên Google Map</a><br/><hr/>' +
        '<img id="logo_chinhanh_googlemap" src="./assets/images/logo_tdphones.png" alt="Workstation"></p>'
    '</div>'

    var contentChinhanh_dienbienphu_travinh = '' +
        '<div id="content" class="content">' +
        '<h3 id="firstHeading" class="firstHeading">TDPhoneS - Chi Nhánh Phường 6 - Trà Vinh</h2>' +
        '<p>Địa Chỉ: 24 Điện Biên Phủ, Khóm 7, Phường 6, Trà Vinh, 87000, Việt Nam</p>' +
        '<a href="https://www.google.com/maps/place/CellphoneS+Tr%C3%A0+Vinh+-+C%E1%BB%ADa+h%C3%A0ng+%C4%91i%E1%BB%87n+tho%E1%BA%A1i,+laptop,+ph%E1%BB%A5+ki%E1%BB%87n+ch%C3%ADnh+h%C3%A3ng+gi%C3%A1+t%E1%BB%91t/@9.9250074,106.3385607,17z/data=!3m1!4b1!4m6!3m5!1s0x31a017d68a1dc1c9:0x4e01906d07b87e7!8m2!3d9.9250021!4d106.3411356!16s%2Fg%2F11s91k8jd7?authuser=1&entry=ttu" target="_blank">Xem Chi Tiết Trên Google Map</a><br/><hr/>' +
        '<img id="logo_chinhanh_googlemap" src="./assets/images/logo_tdphones.png" alt="Workstation"></p>'
    '</div>'

    var contentChinhanh_leloi_travinh = '' +
        '<div id="content" class="content">' +
        '<h3 id="firstHeading" class="firstHeading">TDPhoneS - Chi Nhánh Phường 1 - Trà Vinh</h2>' +
        '<p>Địa Chỉ: 9 Lê Lợi, Khóm 4, Phường 1, Trà Vinh, Việt Nam</p>' +
        '<a href="https://www.google.com/maps/place/Ph%E1%BB%A5+ki%E1%BB%87n+%C4%91i%E1%BB%87n+tho%E1%BA%A1i+95/@9.9514833,106.3386359,17z/data=!3m1!4b1!4m6!3m5!1s0x31a011ed9a46eb19:0xf823dfae86950793!8m2!3d9.951478!4d106.3412108!16s%2Fg%2F11s8t19q6n?authuser=1&entry=ttu" target="_blank">Xem Chi Tiết Trên Google Map</a><br/><hr/>' +
        '<img id="logo_chinhanh_googlemap" src="./assets/images/logo_tdphones.png" alt="Workstation"></p>'
    '</div>'

    var contentChinhanh_nguyendang_travinh = '' +
        '<div id="content" class="content">' +
        '<h3 id="firstHeading" class="firstHeading">TDPhoneS - Chi Nhánh Phường 9 - Trà Vinh</h2>' +
        '<p>Địa Chỉ: 289 Đ. Nguyễn Đáng, Phường 9, Trà Vinh, Việt Nam</p>' +
        '<a href="https://www.google.com/maps/place/289+%C4%90.+Nguy%E1%BB%85n+%C4%90%C3%A1ng,+Ph%C6%B0%E1%BB%9Dng+7,+Tr%C3%A0+Vinh,+Vi%E1%BB%87t+Nam/@9.9246237,106.3342458,17z/data=!3m1!4b1!4m6!3m5!1s0x31a0175b7b4b622b:0x9b1f32242e78a9a4!8m2!3d9.9246184!4d106.3368207!16s%2Fg%2F11svbgfk3r?entry=ttu" target="_blank">Xem Chi Tiết Trên Google Map</a><br/><hr/>' +
        '<img id="logo_chinhanh_googlemap" src="./assets/images/logo_tdphones.png" alt="Workstation"></p>'
    '</div>'

    var contentChinhanh_nguyenthiminhkhai_travinh = '' +
        '<div id="content" class="content">' +
        '<h3 id="firstHeading" class="firstHeading">TDPhoneS - Chi Nhánh Phường 7 - Trà Vinh</h2>' +
        '<p>Địa Chỉ: 184 Nguyễn Thị Minh Khai, Phường 7, Trà Vinh, Việt Nam</p>' +
        '<a href="https://www.google.com/maps/place/184+Nguy%E1%BB%85n+Th%E1%BB%8B+Minh+Khai,+Ph%C6%B0%E1%BB%9Dng+7,+Tr%C3%A0+Vinh,+Vi%E1%BB%87t+Nam/@9.9278381,106.3282102,17z/data=!3m1!4b1!4m6!3m5!1s0x31a01745b065eeb9:0xc8f35f8e8c6458a1!8m2!3d9.9278328!4d106.3307851!16s%2Fg%2F11np523b64?entry=ttu" target="_blank">Xem Chi Tiết Trên Google Map</a><br/><hr/>' +
        '<img id="logo_chinhanh_googlemap" src="./assets/images/logo_tdphones.png" alt="Workstation"></p>'
    '</div>'

    var infoChinhanh_3thang2 = new google.maps.InfoWindow({
        content: contentChinhanh_3thang2
    });

    var infoChinhanh_tinhlo10 = new google.maps.InfoWindow({
        content: contentChinhanh_tinhlo10
    })

    var infoChinhanh_dienbienphu = new google.maps.InfoWindow({
        content: contentChinhanh_dienbienphu
    })

    var infoChinhanh_khavancan = new google.maps.InfoWindow({
        content: contentChinhanh_khavancan
    })

    var infoChinhanh_dienbienphu_travinh = new google.maps.InfoWindow({
        content: contentChinhanh_dienbienphu_travinh
    });

    var infoChinhanh_leloi_travinh = new google.maps.InfoWindow({
        content: contentChinhanh_leloi_travinh
    });

    var infoChinhanh_nguyendang_travinh = new google.maps.InfoWindow({
        content: contentChinhanh_nguyendang_travinh
    });

    var infoChinhanh_nguyenthiminhkhai_travinh = new google.maps.InfoWindow({
        content: contentChinhanh_nguyenthiminhkhai_travinh
    });

}