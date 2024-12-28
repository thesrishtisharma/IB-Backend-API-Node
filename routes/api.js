const express = require('express');
const router = express.Router();
const bankData = require('../resources/IBAllBranchDetails.json')

router.get('/', (req, res) =>{
    res.send("working");
});

router.get('/test', (req, res) =>{
    res.send("working");
});

router.get('/fetchZones', (req, res) => {
    const data = bankData.data;
    const uniqueZones = [...new Set(data.map(obj => obj.Zone))].sort();
    res.setHeader('Content-Type', 'application/json');
    if(uniqueZones.length > 0)
        res.send(JSON.stringify({"zones": uniqueZones}));
    else
        res.send(JSON.stringify({"zones": null}))
});

router.get('/fetchBranches', (req, res) => {
    const zone = req.query.zone;
    const branches = bankData.data.filter(obj => obj.Zone.toLowerCase() === zone.toLowerCase()).sort((b1, b2) => b1['Branch 1 (IB)'].localeCompare(b2['Branch 1 (IB)']));
    res.setHeader('Content-Type', 'application/json');
    if(branches.length > 0)
        res.send(JSON.stringify({"branchData": branches}));
    else
        res.send(JSON.stringify({"branchData": null}))
});

// Export the router object
module.exports = router;