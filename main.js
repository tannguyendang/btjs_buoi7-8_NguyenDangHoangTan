var list = [];
function themSo() {
    var number = parseInt(document.getElementById("txtso").value);
    list.push(number);
    document.getElementById("mang").innerHTML = "mảng là: " + list;
    document.getElementById("txtso").value = '';
}
//thông báo 
function thongBao() {
    if (list.length <= 0) {
        alert("thêm số vào bạn êy!!!")
        return;
    }
}

//Tổng các số dương trg mảng
function tongSoDuong() {
    thongBao();
    var tong = 0;
    for (var i = 0; i < list.length; i++) {
        if (list[i] > 0) {
            tong += list[i];
        }
    }
    document.getElementById("ketQua").innerHTML = "kết quả là: " + tong;
}

//Đếm có bao nhiêu số dương trong mảng
function demSoDuong() {
    thongBao();
    var dem = 0;
    for (var i = 0; i < list.length; i++) {
        if (list[i] > 0) {
            dem++;
        }
    }
    document.getElementById("ketQua").innerHTML = "kết quả là: " + dem;
}

//Tìm sô nhỏ nhất trong mảng
function soNhoNhat() {
    thongBao();
    var min = 0;
    for (var i = 0; i < list.length; i++) {
        if (min > list[i]) {
            min = list[i];
        }
    }
    document.getElementById("ketQua").innerHTML = "kết quả là: " + min;
}

//Tìm số dương nhỏ nhất trong mảng
function soDuongNhoNhat() {
    thongBao();
    var minDuong = 0;
    for (var i = 0; i < list.length; i++) {
        if (list[i] > 0) {
            minDuong = list[i];
            break;
        } else if (min > list[i]) {
            minDuong = list[i]
        }
    }
    document.getElementById("ketQua").innerHTML = "kết quả là: " + minDuong;
}

//Tìm số chẵn cuối cùng trong mảng.Nếu ko thì trả về -1
function soChanCuoiCung() {
    thongBao();
    var soChan = -1;
    for (var i = list.length - 1; i >= 0; i--) {
        if (list[i] % 2 === 0) {
            soChan = list[i];
            break;
        }
    }
    document.getElementById("ketQua").innerHTML = "kết quả là: " + soChan;
}

//Đổi chỗ 2 giá trị trong mảng theo vị trí (Cho nhập vào 2 vị trí muốn đổi chỗ giá trị).
function swap(arr, a, b) {
    var tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
}
function doiCho() {
    var a = document.getElementById("txta").value;
    var b = document.getElementById("txtb").value;
    swap(list, a, b);
    document.getElementById("ketQua").innerHTML = "kết quả là: " + list;
}

//Sắp xếp mảng theo thứ tự tăng dần.
function sapXep() {
    thongBao();
    for (var i = 0; i < list.length; i++) {
        var min = i;
        for (var j = i + 1; j < list.length; j++) {
            if (list[j] < list[min]) {
                min = j;
            }
        }
        if (min != i) {
            var tmp = list[i];
            list[i] = list[min];
            list[min] = tmp;
        }
    }
    document.getElementById("ketQua").innerHTML = "kết quả là: " + list;
}