
const modal=document.querySelector('.js--modal')
const modalBody=document.querySelector('.js--modal__body')
const seeMores=document.querySelectorAll('.js--home-product-item_xemthem')
const overlay=document.querySelector('.js--modal__overlay')
const xemThem=document.querySelector('.js--grid-xemthem')
const troLai=document.querySelector('.js--mau__nut-trolai')
const z_index_header_2=document.querySelector('.js--header')


// mở trang xem thêm
function showXemThem() {
    z_index_header_2.classList.add('z-index')

    modal.classList.add('open')
    xemThem.classList.add('open__form')
}

for(const seeMore of seeMores){
    seeMore.addEventListener('click',showXemThem)
}

function clossXemThem() {
    z_index_header_2.classList.remove('z-index')

    modal.classList.remove('open')
    xemThem.classList.remove('open__form')

}
troLai.addEventListener('click', clossXemThem);
modal.addEventListener('click',clossXemThem)
xemThem.addEventListener('click',function (event) {
    event.stopPropagation()
})



// mở trang đăng kí

const ItemDangKi=document.querySelector('.js--navbar-item__DK')
const registor=document.querySelector('.js--auth-form__DangKi')
const troLaiDK=document.querySelector('.js--control-back__DK')
function showDangKi() {
    z_index_header_2.classList.add('z-index')

    modal.classList.add('open')
    registor.classList.add('open__form')
}
ItemDangKi.addEventListener('click', showDangKi)

function clossshowDK() {
    z_index_header_2.classList.remove('z-index')

    modal.classList.remove('open')
    registor.classList.remove('open__form')

}
troLaiDK.addEventListener('click',clossshowDK)
modal.addEventListener('click',clossshowDK)

registor.addEventListener('click', function (event) {
    event.stopPropagation()
})

// mở trang đăng nhập
const ItemDangNhap=document.querySelector('.js--navbar-item__DN')
const login=document.querySelector('.js--auth-form__DangNhap')
const troLaiDN=document.querySelector('.js--control-back__DN')

function showDangNhap() {
    z_index_header_2.classList.add('z-index')

    modal.classList.add('open')
    login.classList.add('open__form')
}

ItemDangNhap.addEventListener('click',showDangNhap )

function clossshowDN() {
    z_index_header_2.classList.remove('z-index')

    modal.classList.remove('open')
    login.classList.remove('open__form')
    
}
troLaiDN.addEventListener('click',clossshowDN)
modal.addEventListener('click',clossshowDN)
login.addEventListener('click',function (event) {
    event.stopPropagation()
})
// đăng kí sang đăng nhập
const tuDKshowDN=document.querySelector('.js--switch-btn--showDK')

function DkshowDN() {
    registor.classList.remove('open__form')
    login.classList.add('open__form')
}

tuDKshowDN.addEventListener('click', DkshowDN)
// từ nút đăng kí sang  đăng nhập

function name(params) {
    
}



// DN sang DK
const tuDNsangDk=document.querySelector('.js--switch-btn--showDN')
function DNshowDK() {
    login.classList.remove('open__form')
    registor.classList.add('open__form')
}
tuDNsangDk.addEventListener('click',DNshowDK)


// thiết lập đăng kí
const formDK=document.getElementById("registerForm");
const buttonDK=document.getElementById("xemDangKi");

buttonDK.addEventListener('click',function(){
    const name=document.getElementById("Name__DangKi").value;
    const password=document.getElementById("password_DangKi").value;
    localStorage.setItem("name",name);
    localStorage.setItem("password",password);
    alert("đăng kí thành công")
});

// thiết lập đăng nhập
const formDN=document.getElementById('loginForm');
const buttonDN=document.getElementById('loginButton');

const showHeaderDN_DK=document.querySelector('.js--user--show')


buttonDN.addEventListener('click',function () {
    const nameDangnhap=document.getElementById('loginName').value;
    const passwordDangNhap=document.getElementById('loginPassword').value;

    const layUserName=localStorage.getItem("name");
    const layPassword=localStorage.getItem("password");
    if(nameDangnhap===layUserName && passwordDangNhap===layPassword){
        
    z_index_header_2.classList.remove('z-index')

    modal.classList.remove('open')
    login.classList.remove('open__form')
    
    ItemDangKi.classList.add('close')
    ItemDangNhap.classList.add('close')
    showHeaderDN_DK.classList.add('open')
    }
    else{
        alert("đăng nhập không thành công")
    }
})
