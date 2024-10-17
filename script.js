function get_regions() {
    $.ajax({
        url: 'https://api.mserv.online/ph-location/region/',
        type: 'GET',
        success: function(response) {
            const regionSelect = document.getElementById('region');
            regionSelect.innerHTML = '<option value="">Select Region</option>'; // Add default placeholder

            response.forEach(function(region) {
                const option = document.createElement('option');
                option.value = region.code;
                option.textContent = region.name;
                regionSelect.appendChild(option);
            });
        },
        error: function(err) {
            console.error("An error occurred: ", err);
        }
    });
}

function get_province(code) {
    $.ajax({
        url: 'https://api.mserv.online/ph-location/province/' + code,
        type: 'GET',
        success: function(response) {
            const provinceSelect = document.getElementById('province');
            provinceSelect.innerHTML = '<option value="">Select Province</option>'; // Add default placeholder

            response.forEach(function(province) {
                const option = document.createElement('option');
                option.value = province.code;
                option.textContent = province.name;
                provinceSelect.appendChild(option);
            });
        },
        error: function(err) {
            console.error("An error occurred: ", err);
        }
    });
}

function get_citymun(code) {
    $.ajax({
        url: 'https://api.mserv.online/ph-location/citymun/' + code,
        type: 'GET',
        success: function(response) {
            const citymunSelect = document.getElementById('citymun');
            citymunSelect.innerHTML = '<option value="">Select City/Municipality</option>'; // Add default placeholder

            response.forEach(function(citymun) {
                const option = document.createElement('option');
                option.value = citymun.code;
                option.textContent = citymun.name;
                citymunSelect.appendChild(option);
            });
        },
        error: function(err) {
            console.error("An error occurred: ", err);
        }
    });
}

function get_brgy(code) {
    $.ajax({
        url: 'https://api.mserv.online/ph-location/brgy/' + code,
        type: 'GET',
        success: function(response) {
            const brgySelect = document.getElementById('brgy');
            brgySelect.innerHTML = '<option value="">Select Barangay</option>'; // Add default placeholder

            response.forEach(function(brgy) {
                const option = document.createElement('option');
                option.value = brgy.code;
                option.textContent = brgy.name;
                brgySelect.appendChild(option);
            });
        },
        error: function(err) {
            console.error("An error occurred: ", err);
        }
    });
}

window.onload = get_regions;