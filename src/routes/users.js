module.exports = () => {
    const findAll = ((req,res) => {
        const users = [{name: 'John Doe', email: 'mail@mail.com'}]
        res.json(users).status(200).send()
    })
    
    const create = ((req,res) => {
        res.status(201).json(req.body)
    })

    return {findAll, create}
}
