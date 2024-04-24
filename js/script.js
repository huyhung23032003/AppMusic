const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


//create Array



songs : [
    {
        id:'1',
        songName:`Chúng Ta Của Tương Lai`,
        singer:'Sơn Tùng M-TP',
        path:'./asset/audio/ChungTaCuaTuongLai-SonTungMTP-14032595.mp3',
        image:"./assets/img/1.jfif",
    },
    {
        id:'2',
        songName:`Em Sẽ Quên `,    
        singer:'Hòa Minzy ',    
        path:'./asset/audio/EmSeQuen-HoaMinzy-8870910.mp3',
        image:"./assets/img/2.jpg",
    },
    {
        id:'3',
        songName:`Yêu Đi`,
        singer:'Châu Khải Phong',
        path:'./asset/audio/YeuDi-ChauKhaiPhong-8876313.mp3',    
        image:"./assets/img/3.jpg",
    },
    {
        id:'4',
        songName:`Đừng Bắt Em Phải Quên `,
        singer:'Miu Lê',
        path:'./asset/audio/DungBatEmPhaiQuen-MiuLe-8932430.mp3',    
        image:"./assets/img/4.jpg",
    },
    {
        id:'5',
        songName:`Thất Tình `,
        singer:'Đức Phúc',
        path:'./asset/audio/ThatTinh-DucPhuc-8870895.mp3',    
        image:"./assets/img/5.jpg",
    },
    {
        id:'6',
        songName:`Bụi Bay Vào Mắt  `,
        singer:'Đông Nhi',
        path:'./asset/audio/BuiBayVaoMat-DongNhi-8870898.mp3',    
        image:"./assets/img/6.jpg",
    },
    {
        id:'7',
        songName:`Bỗng Dưng Muốn Khóc `,
        singer:'Phương Vy',
        path:'./asset/audio/BongDungMuonKhoc-PhuongVy-8870897.mp3',    
        image:"./assets/img/7.jpg",
    },
    {
        id:'8',
        songName:`Tàn Nhẫn `,
        singer:'Lương Minh Trang',
        path:'./asset/audio/TanNhan-LuongMinhTrang-8870663.mp3',    
        image:"./assets/img/8.jpg",
    },
    {
        id:'9',
        songName:`Thiên Lý Ơi `,
        singer:'Jack',
        path:'./asset/audio/ThienLyOi-JackJ97-13829746.mp3',    
        image:"./assets/img/9.jfif",
    },
    {
        id:'10',
        songName:`Cô Phòng `,
        singer:'Hồ Quang Hiếu',
        path:'./asset/audio/CoPhong-HoQuangHieuHuynhVan-14432441.mp3',    
        image:"./assets/img/10.jpg",
    },
    {
        id:'11',
        songName:`Đấng Nam Nhi `,
        singer:'Thái Học',
        path:'./asset/audio/vwdtiivpyz.mp3',    
        image:"./assets/img/11.jpg",
    },
    {
        id:'12',
        songName:`Nâng Chén Tiêu Sầu `,
        singer:'Bích Phương',
        path:'./asset/audio/NangChenTieuSau-BichPhuong-14017885.mp3',    
        image:"./assets/img/12.jpg",
    },
    {
        id:'13',
        songName:`Có Sao Cũng Đành `,
        singer:'DatKaa',
        path:'./asset/audio/CoSaoCungDanh-DatKaa-14299903.mp3',    
        image:"./assets/img/13.jpg",
    },
    {
        id:'14',
        songName:`Đợi Đến Tháng 13 `,
        singer:'Vũ Thịnh',
        path:'./asset/audio/DoiDenThang13-VuThinh-14132282.mp3',    
        image:"./assets/img/14.jpg",
    },
    {
        id:'15',
        songName:`Cẩm Tú Cầu `,
        singer:'RayO',
        path:'./asset/audio/fv00jfsywh.mp3',    
        image:"./assets/img/15.jpg",
    },
]



// Array.from(document.getElementsByClassName('songItem')).forEach((element, i)=>{
//     element.getElementsByTagName('h5')[0].innerHTML = songs[i].songNameame;
//     element.getElementsByTagName('img')[0].src = songs[i].image;
// })

// let playBtn = document.getElementById('playBtn');
// let wave = document.getElementsByClassName('wave')[0];

// playBtn.addEventListener('click',() => {
//     if (music.pause || music.currentTime<=0) {
//         music.play();
//         playBtn.classList.remove('icon-play');
//         playBtn.classList.add('icon-pause');
//         wave.classList.add('active2');
//     } else {
//         music.pause();
//         playBtn.classList.add('icon-play');
//         playBtn.classList.remove('icon-pause');
//         wave.classList.move('active2');
//     }
// })





// let index = 0;
// let poster_master_play = document.getElementById('poster_master_play');
// let title = document.getElementById('title');

// Array.from(document.getElementsByClassName(playListPlay)).forEach((element) => {
//     element.addEventListener('click', (e) => {
//         index = e.target.id;
//         makeAllPlays();
//         e.target.classList.remove('bi-play-circle-fill');
//         e.target.classList.add('bi-pause-circle-fill');
//         music.src = `audio/${index}.mp3`;
//         poster_master_play.src = `img/${index}.jpg`
//         music.play();
//         let song_title = songs.filter((else) => {
//             return element.id == index;
//         })
//         song_title.forEach(else =>{
//             let {songName} = ele;
//             title.innerHTML = songName;           
//         })
//         masterPlay.classList.remove('icon-play');
//         masterPlay.classList.add('icon-pause');
//         wave.classList.add('active2');
//         music.addEventListener('ended', ()=>{
    //         masterPlay.classList.add('icon-play');
    //         masterPlay.classList.remove('icon-pause');
    //         wave.classList.move('active2');
//         })
//     })
// })

   