module.exports = {
    getHouses: async (req, res) => {
        const db = req.app.get('db')

        const houseList = await db.get_houses()
        res.status(200).send(houseList)
    },
    createHouse: async (req, res) => {
        const db = req.app.get('db')
        console.log(4444444, req.body)
        const { name,
                address,
                city,
                state,
                zipCode
        } = req.body
        

        const houseList = await db.create_house( name, address, city, state, zipCode)
        res.status(200).send(houseList)
    },
    deleteHouse: async (req, res) => {
        const db = req.app.get('db')
        console.log(req.params.id)
        const houseList = await db.delete_house(req.params.id)


        res.status(200).send(houseList)
    }
}