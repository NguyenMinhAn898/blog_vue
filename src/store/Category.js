// eslint-disable-next-line no-unused-vars
export default class Category
{
  constructor() {
  }

  data = [
    {
      id: 0,
      name : "Kinh doanh"
    },{
      id: 1,
      name : "Kinh tế"
    },{
      id: 2,
      name : "Thế giới"
    },{
      id: 3,
      name : "Giải trí"
    },{
      id: 4,
      name : "Thời sự"
    },
    {
      id: 5,
      name : "Khoa học"
    },{
      id: 6,
      name : "Vũ trụ"
    },{
      id: 7,
      name : "Văn hóa"
    },{
      id: 8,
      name : "Kinh doanh"
    },{
      id: 9,
      name : "Thiên văn học"
    },{
      id: 10,
      name : "Vĩ mô"
    }
  ];
  getData() {
    return this.data;
  }

  getDetail(id) {
    return this.data.find(obj => {
      return obj.id === id
    });
  }
  
  getName(id) {
    let name = "";
    this.data.find(obj => {
      if (obj.id === id)
        name = obj.name;
    });
    return name || "Vũ trụ";
  }
}