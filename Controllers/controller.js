const database = require("../Database/db");

const getData = async (req, res) => {
    const database1 = database.main();
    const collection = (await database1).collection('sample_student_list');
    const result = await collection.find({}).toArray();
    res.send({
        message: result,
        status: 200
    })
}

const postData = async (req, res) => {
    const database1 = database.main();
    const collection = (await database1).collection('sample_student_list');
    const result = await collection.insertMany(req.body);
    res.send({
        message: "Record insert Successfully!",
        status: 200,
        data: result
    })
}

module.exports = { getData, postData }