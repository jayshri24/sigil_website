window.onscroll = function () { stickyHeader() };
var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

window.scrollTo({ top: 0, behavior: 'smooth' });


$('.carousel').carousel({
    interval: false
});
function stickyHeader() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

//  redirect to page section 
function redirectToDiv(divId) {
    console.log(divId);
    var element = document.getElementById(divId);
    if (element) {
        var offset = 150;
        var targetScrollPosition = element.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: targetScrollPosition, behavior: 'smooth' });

    }
}

function closeSidebar() {
    document.getElementById("sidebar-section").setAttribute("value", false);
    document.getElementById("sidebar-section").setAttribute("class", 'd-none');
}
//  hide show sections 
function openSection(sectionName) {
    if (sectionName == 'my-home-section' || sectionName == 'about-us-section' || sectionName == 'how-we-work-section') {
        document.getElementById("home-page-section-middle").setAttribute("value", true);
        document.getElementById("home-page-section-middle").setAttribute("class", '');
        document.getElementById("my-team-detail-section").setAttribute("class", "d-none");
        document.getElementById("my-team-detail-section").setAttribute("value", false);
        document.getElementById("get-in-touch-detail-section").setAttribute("class", "d-none");
        document.getElementById("get-in-touch-detail-section").setAttribute("value", false);
        document.getElementById("sidebar-section").setAttribute("value", false);
        document.getElementById("sidebar-section").setAttribute("class", 'd-none');

        this.redirectToDiv(sectionName);
    }

    if (sectionName == 'my-team-detail-section') {
        document.getElementById("my-team-detail-section").setAttribute("value", true);
        document.getElementById("my-team-detail-section").setAttribute("class", '');
        document.getElementById("home-page-section-middle").setAttribute("class", "d-none");
        document.getElementById("home-page-section-middle").setAttribute("value", false);
        document.getElementById("get-in-touch-detail-section").setAttribute("class", "d-none");
        document.getElementById("get-in-touch-detail-section").setAttribute("value", false);
        document.getElementById("sidebar-section").setAttribute("value", false);
        document.getElementById("sidebar-section").setAttribute("class", 'd-none');

        this.redirectToDiv(sectionName);
    }
    if (sectionName == 'get-in-touch-detail-section') {
        document.getElementById("get-in-touch-detail-section").setAttribute("value", true);
        document.getElementById("get-in-touch-detail-section").setAttribute("class", '');
        document.getElementById("my-team-detail-section").setAttribute("class", "d-none");
        document.getElementById("my-team-detail-section").setAttribute("value", false);
        document.getElementById("home-page-section-middle").setAttribute("class", "d-none");
        document.getElementById("home-page-section-middle").setAttribute("value", false);
        document.getElementById("sidebar-section").setAttribute("value", false);
        document.getElementById("sidebar-section").setAttribute("class", 'd-none');
        this.redirectToDiv(sectionName);
    }
    if (sectionName == 'sidebar-section') {
        document.getElementById("sidebar-section").setAttribute("value", true);
        document.getElementById("sidebar-section").setAttribute("class", '');
    }
}

if (
    document.getElementById("home-page-section-middle").getAttribute('value')
) {
    document.getElementById("home-page-section-middle").setAttribute("value", true);
    document.getElementById("home-page-section-middle").setAttribute("class", '');
    document.getElementById("sidebar-section").setAttribute("value", false);
    document.getElementById("sidebar-section").setAttribute("class", 'd-none');
    document.getElementById("my-team-detail-section").setAttribute("class", "d-none")
    document.getElementById("my-team-detail-section").setAttribute("value", false)
    document.getElementById("get-in-touch-detail-section").setAttribute("class", "d-none")
    document.getElementById("get-in-touch-detail-section").setAttribute("value", false)

}


var checkbox = document.getElementById("myCheckbox");

// Add event listener for checkbox change
checkbox.addEventListener("change", function () {
    // Get the label element
    var label = checkbox.nextElementSibling;
    console.log('is che ked', checkbox.checked);
    // Toggle the 'checked' class on the label based on checkbox state
    if (checkbox.checked) {
        document.getElementById("cb-lables").setAttribute("class", 'checkbox-label checkbox-checked');
        document.getElementById("myCheckbox").setAttribute("class", 'checked');
    } else {
        document.getElementById("cb-lables").setAttribute("class", 'checkbox-label');
        document.getElementById("myCheckbox").setAttribute("class", '');
    }
});