export const formatDate = (_dt) => {
    let dt = new Date(_dt);
    let yyyy = dt.getFullYear();
    let mm = ("00" + (dt.getMonth() + 1)).slice(-2);
    let dd = ("00" + dt.getDate()).slice(-2);
    // let hh = ('00' + dt.getHours()).slice(-2);
    // let mi = ('00' + dt.getMinutes()).slice(-2);
    // return `${yyyy}-${mm}-${dd} ${hh}:${mi}`;
    return `${yyyy}-${mm}-${dd}`;
};
