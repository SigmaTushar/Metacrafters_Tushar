// Assessment Requirements
// 1. Create a variable that can hold a number of NFT's. What type of variable might this be?
// 2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
//    The metadata values will be passed to the function as parameters. When the NFT is ready, 
//    you will store it in the variable you created in step 1
// 3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
// 4. For good measure, getTotalSupply() should return the number of NFT's you have created
// */

//creating the variable of 'const' type that can hold the number of NFT'S: 
const NFT_1 = [];


//creating a function with name as mintNFT to mint the data
//Also creating an object of 'const' of the mintNFT function to hold the metadata and then store it in NFT_1:

function mintNFT(emp_Name, emp_ID, emp_Designation, emp_Salary)
{
    const NFT = {
        'name': emp_Name,
        'ID': emp_ID,
        'Designation': emp_Designation,
        'Salary': emp_Salary 
    }
    
    NFT_1.push(NFT);
    console.log("The details of successfully minted data are: " + emp_Name);
}

/* Creating a listNFT function that will traverse through all indexes of the created array NFT_1 */

function listNFT()
{
    //using a for loop to traverse trough the index of NFT_1:
    for(let i= 0; i<NFT_1.length;i++)
        {
            console.log(NFT_1[i]);
        }
}

//creating the getTotalSupply() function to print all the minted data in the NFT_1 Successfully:

function getTotalSupply()
{
    console.log(NFT_1.length);
}

// calling the mintNFT() function by passing the parameters:

mintNFT('Tushar', 15552, 'Frontend developer', 1200000);
mintNFT('Deep', 13367, 'Backend developer', 1000000);
mintNFT('Lalit', 14587, 'Marketing head', 150000);
mintNFT('Gaurav', 12218, 'App developer', 2000000);

// calling the listNFT() and getTotalSupply() functions:
listNFT();
getTotalSupply();


