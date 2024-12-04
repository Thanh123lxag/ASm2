//Khoi tao danh sach san pham
function createProduct() {
    if (localStorage.getItem('products') == null) {
        let products = [{
            id: 1,
            status: 1, 
            title: 'Áo Bóng Đá Nam Argentina',
            img: 'img/products/shirt(arg).jpg',
            category: 'Áo Th',
            price: 200000,
            desc: 'Áo Bóng Đá đội tuyển Argentina dành cho Nam.'
        },
        {
            id: 2,
            status: 1, 
            title: 'Áo Bóng Đá Nam Croatia',
            img: 'img/products/shirt(croa).jpg',
            category: 'Áo Th',
            price: 180000,
            desc: 'Áo Bóng Đá đội tuyển Croatia dành cho Nam.'
        },
        {
            id: 3,
            status: 1, 
            title: 'Áo Bóng Đá Nam England',
            img: 'img/products/shirt(eng).jpg',
            category: 'Áo Th',
            price: 180000,
            desc: 'Áo Bóng Đá đội tuyển England dành cho Nam.'
        },
        {
            id: 4,
            status: 1, title: 'Áo Bóng Đá Nam Germany',
            img: 'img/products/shirt(ger).jpg',
            category: 'Áo Th',
            price: 699000,
            desc: 'Áo Bóng Đá đội tuyển Germany dành cho Nam.'
        },
        {
            id: 5,
            status: 1, 
            title: 'Áo Bóng Đá Nam Netherland',
            img: 'img/products/shirt(neth).jpg',
            category: 'Áo Th',
            price: 280000,
            desc: 'Áo Bóng Đá đội tuyển Netherland dành cho Nam.'
        },

        {
            id: 6,
            status: 1, 
            title: 'Áo Bóng Đá Nam Portugal',
            img: 'img/products/shirt(port).jpg',
            category: 'Áo Th',
            price: 540000,
            desc: 'Áo Bóng Đá đội tuyển Portugal dành cho Nam.'
        },

        {
            id: 7,
            status: 1, 
            title: 'Áo Bóng Đá Nam Việt Nam',
            category: 'Áo Th',
            img: 'img/products/shirt(vn).jpg',
            price: 340000,
            desc: 'Áo Bóng Đá Nam Việt Nam.'
        },

        {
            id: 8,
            status: 1, 
            title: 'Áo Bóng Đá Nam France',
            img: 'img/products/shirt(fr).jpg',
            category: 'Áo Th',
            price: 140000,
            desc: 'Áo Bóng Đá đội tuyển France dành cho Nam.'
        },

        {
            id: 9,
            status: 1, 
            title: 'Áo Bóng Đá Nam Croatia',
            img: 'img/products/shirt(croa).jpg',
            category: 'Xe Đạp',
            price: 180000,
            desc: 'Áo Bóng Đá đội tuyển Croatia dành cho Nam.'
        },
        {
            id: 10,
            status: 1, 
            title: 'Áo Bóng Đá Nam England',
            img: 'img/products/shirt(eng).jpg',
            category: 'Xe Đạp',
            price: 180000,
            desc: 'Áo Bóng Đá đội tuyển England dành cho Nam.'
        },
        {
            id: 11,
            status: 1, title: 'Áo Bóng Đá Nam Germany',
            img: 'img/products/shirt(ger).jpg',
            category: 'Xe Đạp',
            price: 699000,
            desc: 'Áo Bóng Đá đội tuyển Germany dành cho Nam.'
        },
        {
            id: 12,
            status: 1, 
            title: 'Áo Bóng Đá Nam Netherland',
            img: 'img/products/shirt(neth).jpg',
            category: 'Xe Đạp',
            price: 280000,
            desc: 'Áo Bóng Đá đội tuyển Netherland dành cho Nam.'
        },

        {
            id: 13,
            status: 1, 
            title: 'Áo Bóng Đá Nam Portugal',
            img: 'img/products/shirt(port).jpg',
            category: 'Xe Đạp',
            price: 540000,
            desc: 'Áo Bóng Đá đội tuyển Portugal dành cho Nam.'
        },

        {
            id: 14,
            status: 1, 
            title: 'Áo Bóng Đá Nam Việt Nam',
            category: 'Xe Đạp',
            img: 'img/products/shirt(vn).jpg',
            price: 340000,
            desc: 'Áo Bóng Đá Nam Việt Nam.'
        },

        {
            id: 15,
            status: 1, 
            title: 'Áo Bóng Đá Nam France',
            img: 'img/products/shirt(fr).jpg',
            category: 'Xe Đạp',
            price: 140000,
            desc: 'Áo Bóng Đá đội tuyển France dành cho Nam.'
        },

        {
            id: 16,
            status: 1, 
            title: 'Áo Bóng Đá Nam Croatia',
            img: 'img/products/shirt(croa).jpg',
            category: 'Xe Đạp',
            price: 180000,
            desc: 'Áo Bóng Đá đội tuyển Croatia dành cho Nam.'
        },
        {
            id: 17,
            status: 1, 
            title: 'Áo Bóng Đá Nam England',
            img: 'img/products/shirt(eng).jpg',
            category: 'Giày',
            price: 180000,
            desc: 'Áo Bóng Đá đội tuyển England dành cho Nam.'
        },
        {
            id: 18,
            status: 1, title: 'Áo Bóng Đá Nam Germany',
            img: 'img/products/shirt(ger).jpg',
            category: 'Giày',
            price: 699000,
            desc: 'Áo Bóng Đá đội tuyển Germany dành cho Nam.'
        },
        {
            id: 19,
            status: 1, 
            title: 'Áo Bóng Đá Nam Netherland',
            img: 'img/products/shirt(neth).jpg',
            category: 'Giày',
            price: 280000,
            desc: 'Áo Bóng Đá đội tuyển Netherland dành cho Nam.'
        },

        {
            id: 20,
            status: 1, 
            title: 'Áo Bóng Đá Nam Portugal',
            img: 'img/products/shirt(port).jpg',
            category: 'Giày',
            price: 540000,
            desc: 'Áo Bóng Đá đội tuyển Portugal dành cho Nam.'
        },

        {
            id: 21,
            status: 1, 
            title: 'Áo Bóng Đá Nam Việt Nam',
            category: 'Giày',
            img: 'img/products/shirt(vn).jpg',
            price: 340000,
            desc: 'Áo Bóng Đá Nam Việt Nam.'
        },

        {
            id: 22,
            status: 1, 
            title: 'Áo Bóng Đá Nam France',
            img: 'img/products/shirt(fr).jpg',
            category: 'Giày',
            price: 140000,
            desc: 'Áo Bóng Đá đội tuyển France dành cho Nam.'
        },
        
        {
            id: 23,
            status: 1, 
            title: 'Áo Bóng Đá Nam Việt Nam',
            category: 'Giày',
            img: 'img/products/shirt(vn).jpg',
            price: 340000,
            desc: 'Áo Bóng Đá Nam Việt Nam.'
        },

        {
            id: 24,
            status: 1, 
            title: 'Áo Bóng Đá Nam France',
            img: 'img/products/shirt(fr).jpg',
            category: 'Giày',
            price: 140000,
            desc: 'Áo Bóng Đá đội tuyển France dành cho Nam.'
        },

        {
            id: 25,
            status: 1, 
            title: 'Áo Bóng Đá Nam Argentina',
            img: 'img/products/shirt(arg).jpg',
            category: 'Vợt',
            price: 200000,
            desc: 'Áo Bóng Đá đội tuyển Argentina dành cho Nam.'
        },
        {
            id: 26,
            status: 1, 
            title: 'Áo Bóng Đá Nam Croatia',
            img: 'img/products/shirt(croa).jpg',
            category: 'Vợt',
            price: 180000,
            desc: 'Áo Bóng Đá đội tuyển Croatia dành cho Nam.'
        },
        {
            id: 27,
            status: 1, 
            title: 'Áo Bóng Đá Nam England',
            img: 'img/products/shirt(eng).jpg',
            category: 'Vợt',
            price: 180000,
            desc: 'Áo Bóng Đá đội tuyển England dành cho Nam.'
        },
        {
            id: 28,
            status: 1, title: 'Áo Bóng Đá Nam Germany',
            img: 'img/products/shirt(ger).jpg',
            category: 'Vợt',
            price: 699000,
            desc: 'Áo Bóng Đá đội tuyển Germany dành cho Nam.'
        },
        {
            id: 29,
            status: 1, 
            title: 'Áo Bóng Đá Nam Netherland',
            img: 'img/products/shirt(neth).jpg',
            category: 'Vợt',
            price: 280000,
            desc: 'Áo Bóng Đá đội tuyển Netherland dành cho Nam.'
        },

        {
            id: 30,
            status: 1, 
            title: 'Áo Bóng Đá Nam Portugal',
            img: 'img/products/shirt(port).jpg',
            category: 'Vợt',
            price: 540000,
            desc: 'Áo Bóng Đá đội tuyển Portugal dành cho Nam.'
        },

        {
            id: 31,
            status: 1, 
            title: 'Áo Bóng Đá Nam Việt Nam',
            category: 'Vợt',
            img: 'img/products/shirt(vn).jpg',
            price: 340000,
            desc: 'Áo Bóng Đá Nam Việt Nam.'
        },

        {
            id: 32,
            status: 1, 
            title: 'Áo Bóng Đá Nam France',
            img: 'img/products/shirt(fr).jpg',
            category: 'Vợt',
            price: 140000,
            desc: 'Áo Bóng Đá đội tuyển France dành cho Nam.'
        },

        {
            id: 33,
            status: 1, 
            title: 'Áo Bóng Đá Nam Croatia',
            img: 'img/products/shirt(croa).jpg',
            category: 'Banh',
            price: 180000,
            desc: 'Áo Bóng Đá đội tuyển Croatia dành cho Nam.'
        },
        {
            id: 34,
            status: 1, 
            title: 'Áo Bóng Đá Nam England',
            img: 'img/products/shirt(eng).jpg',
            category: 'Banh',
            price: 180000,
            desc: 'Áo Bóng Đá đội tuyển England dành cho Nam.'
        },
        {
            id: 35,
            status: 1, title: 'Áo Bóng Đá Nam Germany',
            img: 'img/products/shirt(ger).jpg',
            category: 'Banh',
            price: 699000,
            desc: 'Áo Bóng Đá đội tuyển Germany dành cho Nam.'
        },
        {
            id: 36,
            status: 1, 
            title: 'Áo Bóng Đá Nam Netherland',
            img: 'img/products/shirt(neth).jpg',
            category: 'Banh',
            price: 280000,
            desc: 'Áo Bóng Đá đội tuyển Netherland dành cho Nam.'
        },

        {
            id: 37,
            status: 1, 
            title: 'Áo Bóng Đá Nam Portugal',
            img: 'img/products/shirt(port).jpg',
            category: 'Banh',
            price: 540000,
            desc: 'Áo Bóng Đá đội tuyển Portugal dành cho Nam.'
        },

        {
            id: 38,
            status: 1, 
            title: 'Áo Bóng Đá Nam Việt Nam',
            category: 'Banh',
            img: 'img/products/shirt(vn).jpg',
            price: 340000,
            desc: 'Áo Bóng Đá Nam Việt Nam.'
        },

        {
            id: 39,
            status: 1, 
            title: 'Áo Bóng Đá Nam France',
            img: 'img/products/shirt(fr).jpg',
            category: 'Banh',
            price: 140000,
            desc: 'Áo Bóng Đá đội tuyển France dành cho Nam.'
        },

        {
            id: 40,
            status: 1, 
            title: 'Áo Bóng Đá Nam Croatia',
            img: 'img/products/shirt(croa).jpg',
            category: 'Banh',
            price: 180000,
            desc: 'Áo Bóng Đá đội tuyển Croatia dành cho Nam.'
        },
        {
            id: 41,
            status: 1, 
            title: 'Áo Bóng Đá Nam England',
            img: 'img/products/shirt(eng).jpg',
            category: 'Phụ Kiện',
            price: 180000,
            desc: 'Áo Bóng Đá đội tuyển England dành cho Nam.'
        },
        {
            id: 42,
            status: 1, title: 'Áo Bóng Đá Nam Germany',
            img: 'img/products/shirt(ger).jpg',
            category: 'Phụ Kiện',
            price: 699000,
            desc: 'Áo Bóng Đá đội tuyển Germany dành cho Nam.'
        },
        {
            id: 43,
            status: 1, 
            title: 'Áo Bóng Đá Nam Netherland',
            img: 'img/products/shirt(neth).jpg',
            category: 'Phụ Kiện',
            price: 280000,
            desc: 'Áo Bóng Đá đội tuyển Netherland dành cho Nam.'
        },

        {
            id: 44,
            status: 1, 
            title: 'Áo Bóng Đá Nam Portugal',
            img: 'img/products/shirt(port).jpg',
            category: 'Phụ Kiện',
            price: 540000,
            desc: 'Áo Bóng Đá đội tuyển Portugal dành cho Nam.'
        },

        {
            id: 45,
            status: 1, 
            title: 'Áo Bóng Đá Nam Việt Nam',
            category: 'Phụ Kiện',
            img: 'img/products/shirt(vn).jpg',
            price: 340000,
            desc: 'Áo Bóng Đá Nam Việt Nam.'
        },

        {
            id: 46,
            status: 1, 
            title: 'Áo Bóng Đá Nam France',
            img: 'img/products/shirt(fr).jpg',
            category: 'Phụ Kiện',
            price: 140000,
            desc: 'Áo Bóng Đá đội tuyển France dành cho Nam.'
        },
        
        {
            id: 47,
            status: 1, 
            title: 'Áo Bóng Đá Nam Việt Nam',
            category: 'Phụ Kiện',
            img: 'img/products/shirt(vn).jpg',
            price: 340000,
            desc: 'Áo Bóng Đá Nam Việt Nam.'
        },

        {
            id: 48,
            status: 1, 
            title: 'Áo Bóng Đá Nam France',
            img: 'img/products/shirt(fr).jpg',
            category: 'Phụ Kiện',
            price: 140000,
            desc: 'Áo Bóng Đá đội tuyển France dành cho Nam.'
        },

        {
            id: 49,
            status: 1, 
            title: 'Áo Bóng Đá Nam England',
            img: 'img/products/shirt(eng).jpg',
            category: 'Món Khác',
            price: 180000,
            desc: 'Áo Bóng Đá đội tuyển England dành cho Nam.'
        },
        {
            id: 50,
            status: 1, title: 'Áo Bóng Đá Nam Germany',
            img: 'img/products/shirt(ger).jpg',
            category: 'Món Khác',
            price: 699000,
            desc: 'Áo Bóng Đá đội tuyển Germany dành cho Nam.'
        },
        {
            id: 51,
            status: 1, 
            title: 'Áo Bóng Đá Nam Netherland',
            img: 'img/products/shirt(neth).jpg',
            category: 'Món Khác',
            price: 280000,
            desc: 'Áo Bóng Đá đội tuyển Netherland dành cho Nam.'
        },

        {
            id: 52,
            status: 1, 
            title: 'Áo Bóng Đá Nam Portugal',
            img: 'img/products/shirt(port).jpg',
            category: 'Món Khác',
            price: 540000,
            desc: 'Áo Bóng Đá đội tuyển Portugal dành cho Nam.'
        },

        {
            id: 53,
            status: 1, 
            title: 'Áo Bóng Đá Nam Việt Nam',
            category: 'Món Khác',
            img: 'img/products/shirt(vn).jpg',
            price: 340000,
            desc: 'Áo Bóng Đá Nam Việt Nam.'
        },

        {
            id: 54,
            status: 1, 
            title: 'Áo Bóng Đá Nam France',
            img: 'img/products/shirt(fr).jpg',
            category: 'Món Khác',
            price: 140000,
            desc: 'Áo Bóng Đá đội tuyển France dành cho Nam.'
        },
        
        {
            id: 55,
            status: 1, 
            title: 'Áo Bóng Đá Nam Việt Nam',
            category: 'Món Khác',
            img: 'img/products/shirt(vn).jpg',
            price: 340000,
            desc: 'Áo Bóng Đá Nam Việt Nam.'
        },

        {
            id: 56,
            status: 1, 
            title: 'Áo Bóng Đá Nam France',
            img: 'img/products/shirt(fr).jpg',
            category: 'Món Khác',
            price: 140000,
            desc: 'Áo Bóng Đá đội tuyển France dành cho Nam.'
        },

        ]
        localStorage.setItem('products', JSON.stringify(products));
    }
}

// Create admin account 
function createAdminAccount() {
    let accounts = localStorage.getItem("accounts");
    if (!accounts) {
        accounts = [];
        accounts.push({
            fullname: "Trương Phạm Anh Tuấn",
            phone: "0123456789",
            password: "123456",
            address: '',
            email: '',
            status: 1,
            join: new Date(),
            cart: [],
            userType: 1
        })
        accounts.push({
            fullname: "Lê Chí Hào",
            phone: "0123456789",
            password: "123456",
            address: '',
            email: '',
            status: 1,
            join: new Date(),
            cart: [],
            userType: 1
        })
        accounts.push({
            fullname: "Thần Kim Thành",
            phone: "0123456789",
            password: "123456",
            address: '',
            email: '',
            status: 1,
            join: new Date(),
            cart: [],
            userType: 1
        })
        localStorage.setItem('accounts', JSON.stringify(accounts));
    }
}

window.onload = createProduct();
window.onload = createAdminAccount();

