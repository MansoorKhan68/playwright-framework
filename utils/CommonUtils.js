import CryptoJS from "crypto-js";

class CommonUtils {
    constructor() {
        this.secretKey = process.env.ENCRYPTION_KEY ? process.env.ENCRYPTION_KEY : "";
    }
    /**
     * Encrypts the data using AES encryption
     * @param {string} data - The data to encrypt
     */
    encryptData(data){
        const encryptedData = CryptoJS.AES.encrypt(data, this.secretKey).toString();
        console.log(encryptedData);
        return encryptedData;
    }
    /**
     * Decrypts the data using AES decryption
     * @param {string} data - The data to decrypt
     */
    decryptData(data){
        const decryptedData = CryptoJS.AES.decrypt(data, this.secretKey).toString(CryptoJS.enc.Utf8);
        console.log(decryptedData);
        return decryptedData;
    }
}

export default CommonUtils;