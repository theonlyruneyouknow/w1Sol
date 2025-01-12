const getWife = (req, res) => {
    res.send('LeaAnne');
  };

const getSon = (req, res) => {
    res.send('Samuel');
  };

const getDaughter1 = (req, res) => {
    res.send('Lynn');
  };
  
  const getDaughter2 = (req, res) => {
    res.send('Lilly');
  };

 const getAge3 = (req, res) => {
    res.send('Age: 54');
  };

  module.exports = { getWife, getSon, getDaughter1, getDaughter2, getAge3 };
