import bcrypt from "bcrypt";
import User from "../../modules/user/model/User";

export async function createInitialData() {
    try {
        await User.sync({ force: true });

        let password = await bcrypt.hash("123456", 10);
    
        await User.create({
            name: "John Doe",
            email: "teste@rr.ue",
            password: password
        });
    } catch (err) {
        console.log(err);
    }

}