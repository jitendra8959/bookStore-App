export const setCookie = ({name, value, expiry}) => {
    // var d = new Date();
    // d.setTime(d.getTime() + (expiry));
    // var expires = "expires="+ expiry;
    document.cookie = name + "=" + value + ";" + expiry + ";path=/";
}
export const deleteAllCookies = () => {
    const cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}
export const deleteCookie = (name) => {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/";
}

export const getCookie = (cname) => {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
export const expiryDate = () => {
    var d = new Date();
    return d.getFullYear()+1;
}
export const getOneMonthExpiry = () => {
    const d = new Date();
    d.setDate(d.getDate() + 30); // Add one day to the current date
    return "expires=" + d.toUTCString();
}
export const getOneDayExpiry = () => {
    const d = new Date();
    d.setDate(d.getDate() + 1); // Add one day to the current date
    return "expires=" + d.toUTCString();
}
export const getOneHourExpiry = () => {
    const d = new Date();
    d.setTime(d.getTime() + 60 * 60 * 1000); // Add one hour (in milliseconds) to the current date
    return "expires=" + d.toUTCString();
}
export const getOneMinuteExpiry = () => {
    const d = new Date();
    d.setTime(d.getTime() + 60000); // Add one minute (in milliseconds) to the current date
    return "expires=" + d.toUTCString();
}



/* Store data in local storage with one day expiry */
export const setStorage= (key, value, expirationInHours) => {
    const expirationMS = expirationInHours * 60 * 60 * 1000; // Convert hours to milliseconds
    const now = new Date().getTime();
    const item = {
        value,
        expiration: now + expirationMS,
    };
    localStorage.setItem(key, JSON.stringify(item));
}

// Function to retrieve data from local storage with expiration check
export const getStorage = (key) => {
    const item = localStorage.getItem(key);
    if (item) {
        const parsedItem = JSON.parse(item);
        const now = new Date().getTime();
        if (now < parsedItem.expiration) {
            return parsedItem.value;
        } else {
            localStorage.removeItem(key); // Remove expired item
        }
    }
    return null; // Return null if item is not found or expired
}

export const deleteStorage = (key) => {
    localStorage.removeItem(key);
}

//For Example
// const dataToStore = { example: 'data' };
// const key = 'myDataKey';
// setStorage(key, dataToStore, 24);
// const retrievedData = getStorage(key);
// console.log(retrievedData);