// eslint-disable-next-line no-unused-vars
export default class Place
{
    constructor() {
    }

    data = [
        {
        id: 0,
        name : "Việt Nam"
        },{
        id: 1,
        name : "Châu Á"
        },{
        id: 2,
        name : "Châu Âu"
        },{
        id: 3,
        name : "Châu Mỹ"
        },{
        id: 4,
        name : "Châu Úc"
        },
    ];

    getData() {
        return this.data;
    }

    getDetail(id) {
        return this.data.find(obj => {
            return obj.id === id
        });
    }   

    getName(arrId) {
        let name = "";
        this.data.forEach(obj => {
            if (obj.id == arrId)
                name = obj.name
        })
        return name;
    }
}