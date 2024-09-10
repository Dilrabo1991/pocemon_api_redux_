import request from "..";

class homeServices {
    static dashboard = () => {
        return request.get(`ability/`);
    };
}

export default homeServices;