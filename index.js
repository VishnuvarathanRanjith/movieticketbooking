const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;

mongoose.connect("mongodb+srv://vishnu:1234@cluster0.qum6v.mongodb.net/BookingDB?retryWrites=true&w=majority")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));


// const formdata = new mongoose.Schema({
//   username: String,
//   email: String,
//   password: String,
//   history: [],
// })

// const bookingSchema = new mongoose.Schema({
//   date: String,
//   movie: String,
//   theater: String,
//   time: String,
//   seats: [String],
//   amount: Number,
// });

const formdata = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  booking: {
    type: Array,
    default: []
  }
})

const collection = mongoose.model('collections', formdata);

// const Booking = mongoose.model("Booking", bookingSchema);


app.post("/addbookings", async (req, res) => {
  const{item,_id}=req.body;
  try {
    const user=await collection.findById({_id});
    // const newBooking = new Booking(req.body);
    // await newBooking.save();
    // res.send(" Booking stored successfully in History");

    user.booking=[...user.booking,item]
    await collection.findByIdAndUpdate(_id,{booking:user.booking});
    res.json({ success: true, message: "Booking stored successfully", user: user });
  } catch (err) {
    console.error(" Error saving booking:", err);
    res.status(500).json({ message: "Error saving booking", error: err });
  }
});


// app.get("/viewbookings", async (req, res) => {
//   try {
//     const bookings = await Booking.find();
//     res.json(bookings);
//   } catch (err) {
//     console.error(" Error fetching booking history:", err);
//     res.status(500).json({ message: "Error fetching booking history", error: err });
//   }
// });

app.delete("/clearHistory", async (req, res) => {
  try {
    await Booking.deleteMany({});
    res.json({ message: "Booking history cleared successfully" });
  } catch (err) {
    console.error("Error clearing booking history:", err);
    res.status(500).json({ message: "Error clearing booking history", error: err });
  }
});




app.post('/Login', async (req, res) => {
  const { email } = req.body;
  await collection.findOne({ email })
    .then((data) => {
      if (data) {
        res.json({ success: true, msg: "login successfull!",user:data});
      } else {
        res.send({ success: false, msg: "user not found!!" });
      }
    })
    .catch(err => console.log(err));

})

app.post('/signup', async (req, res) => {
  const { email } = req.body;

  await collection.findOne({ email })
    .then((data) => {
      if (data) {
        res.send({ success: true, msg: "user already exist" });
      } else {
        const coll = new collection(req.body);
        coll.save()
          .then(() => {
            console.log("account created ", req.body)
            res.send({ success: true, msg: "Account created" });
          })
          .catch(err => {
            console.error('Error saving form data:', err);
            res.status(500).send("Error saving data");
          });
      }
    })
    .catch(err => console.log(err));

})

app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
})
