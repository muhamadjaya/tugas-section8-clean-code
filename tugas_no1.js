/** Soal No. 1
 *  
 * Berapa banyak kekurangan dalam penulisan kode tersebut?
 * Jawaban :
 * Terdapat 4 kekurangan penulisan kode, yaitu pada bagian : 
 * 
 * 
 * Bagian mana saja terjadi kekurangan tersbut?
 * Jawaban :
 * - Pada penulisan di setiap nama class
 * - Pada pembuatan constructor
 * - Pembuatan atribut di dalam class
 * - Pada penulisan nama method 
 * 
 * 
 * Tuliskan alasan dari tiap kekurangan tersebut!
 * Jawaban :
 * - Sebaiknya nama setiap class diawali dengan huruf kapital supaya menjadi penanda bahwa itu adalah sebuah class
 * - Pada kode tersebut tidak terdapat sebuah constructor yang merupakan keharusan.
 * - Pada pembuatan atribut harus memakai this agar atribut tersebut dapat digunakan.
 * - Penulisan nama method tidak perlu didahului dengan keyword atau kata apapun.
 * 
 */


/**
 * Penamaan class tidak didahului dengan huruf kapital
 */
 class user {
    /**
     * - Tidak ditambahkan constructor
     * - Pembuatan atribut tidak didahului dengan keyword this
     */
    var id;
    var username;
    var password;
}

/**
 * Penamaan class tidak didahului dengan huruf kapital
 */
class userservice {
    /**
     * - Tidak ditambahkan constructor
     * - Pembuatan atribut tidak didahului dengan keyword this
     * - Kesalahan pendeklarasian variable array
     */
    user[] users = [];

    /**
     * Pembuatan method didahului dengan keyword atau kata kunci lain
     */
    user[] getallusers() {
        return users;
    }
    
    /**
     * Pembuatan method didahului dengan keyword atau kata kunci lain
     */
    user getuserbyid(userid) {
        return this.users.filter(userid);
    }
}