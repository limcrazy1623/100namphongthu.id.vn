const data = [
  {
    img: "https://res.cloudinary.com/deyvwamak/image/upload/v1728097312/Myevent/avatar/laupyblnilxknkka1kmk.png",
    name: "Phan Phụng Hùng",
    cp: "Chi phái Điện Thọ",
    detail: "Thông tin chi tiết về Tín hữu A"
  },
  {
    img: "https://res.cloudinary.com/deyvwamak/image/upload/v1728097312/Myevent/avatar/laupyblnilxknkka1kmk.png",
    name: "Phan Phụng Quốc",
    cp: "Chi phái Điện Thọ",
    detail: "Tín hữu B đã tham gia sinh hoạt vào tháng 5"
  },
  {
    img: "https://res.cloudinary.com/deyvwamak/image/upload/v1728097312/Myevent/avatar/laupyblnilxknkka1kmk.png",
    name: "Trần Thanh",
    cp: "Chi phái Điện Hồng",
    detail: "Hoạt động cộng đồng của Tín hữu C"
  },
  {
    img: "https://res.cloudinary.com/deyvwamak/image/upload/v1728097312/Myevent/avatar/laupyblnilxknkka1kmk.png",
    name: "Huỳnh Thị Huệ",
    cp: "Hội nhánh Đại Hòa",
    detail: "Thông tin chi tiết về Tín hữu A"
  },
  {
    img: "https://res.cloudinary.com/deyvwamak/image/upload/v1728097312/Myevent/avatar/laupyblnilxknkka1kmk.png",
    name: "Huỳnh Anh",
    cp: "Hội nhánh Đại Hòa",
    detail: "Tín hữu B đã tham gia sinh hoạt vào tháng 5"
  },
  {
    img: "https://res.cloudinary.com/deyvwamak/image/upload/v1728097312/Myevent/avatar/laupyblnilxknkka1kmk.png",
    name: "Trần Thượng Trung",
    cp: "Hội nhánh Điện Phước",
    detail: "Hoạt động cộng đồng của Tín hữu C"
  },
  {
    img: "https://res.cloudinary.com/deyvwamak/image/upload/v1728097312/Myevent/avatar/laupyblnilxknkka1kmk.png",
    name: "Hoàng Vũ",
    cp: "Hội nhánh Điện Phước",
    detail: "Thông tin chi tiết về Tín hữu A"
  },
  {
    img: "https://res.cloudinary.com/deyvwamak/image/upload/v1728097312/Myevent/avatar/laupyblnilxknkka1kmk.png",
    name: "Phan Minh Thanh",
    cp: "Chi phái Điện Thọ",
    detail: "Tín hữu B đã tham gia sinh hoạt vào tháng 5"
  },
  {
    img: "https://res.cloudinary.com/deyvwamak/image/upload/v1728097312/Myevent/avatar/laupyblnilxknkka1kmk.png",
    name: "Trần Phương",
    cp: "Chi phái Điện Hồng",
    detail: "Hoạt động cộng đồng của Tín hữu C"
  }
];

// Hàm render thẻ tín hữu
function renderCards(filteredData) {
  const container = document.getElementById("item-container");
  container.innerHTML = "";

  filteredData.forEach(item => {
    const col = document.createElement("div");
    col.className = "col";
    col.innerHTML = `
      <div class="card">
        <img src="${item.img}" alt="${item.name}">
        <div class="card-body">
          <h3><a href="#">Gia đình ông/bà ${item.name}</a></h3>
          <div class="card-content">
            <div class="propery-info">${item.cp}</div>
          </div>
        </div>
      </div>
    `;
    container.appendChild(col);
  });
}

// Gắn sự kiện sau khi DOM load xong
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll('.tab-buttons[data-type="data"]');
  const defaultGallery = document.getElementById("default-gallery");
  const customGallery = document.getElementById("custom-gallery");
  const backBtn = document.getElementById("back-btn");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const cp = button.getAttribute("data-cp");
      const filtered = data.filter(item => item.cp === cp);
      renderCards(filtered);

      // Hiển thị phần custom
      defaultGallery.style.display = "none";
      customGallery.style.display = "flex";
    });
  });

  // Xử lý nút quay lại
  backBtn.addEventListener("click", () => {
    customGallery.style.display = "none";
    defaultGallery.style.display = "flex";
  });
});
