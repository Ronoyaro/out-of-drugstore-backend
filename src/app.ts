import express from "express";

const app = express();

interface Medicine {
  id: number,
  tradeName: string; 
  activeIngredient: string;
  dosage: number;
  dosageUnit: "mg" | "ml" | "mcg";
  laboratory: string;
  price: number;
}

const medicines: Medicine[] = [];

app.use(express.json())

app.get('/medicines', (req, res) => {
  res.status(200).json(medicines)
})

app.get('/medicines/:id', (req, res) => {
  const id = Number(req.params.id)
  const medicine = medicines.find((medicine) => medicine.id === id);

  if(!medicine){
    res.status(404).json({message: 'Medicine not found'})
    return;
  } 
   res.status(200).json(medicine)
})

app.post('/medicines', (req, res) => {
  const medicine: Medicine = {
    id: medicines.length + 1,
    ...req.body
  }
  
  medicines.push(medicine)
  
  res.status(201).json(medicine)
})

app.listen(3000, () => {
  console.log('server running on port 3000')
})