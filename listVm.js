const msrest = require('ms-rest');
const msRestAzure = require('ms-rest-azure');
const AzureServiceClient = msRestAzure.AzureServiceClient;
const computeManagementClient = require('azure-arm-compute');



const clientId = "" /* Your ClientId/appId which is like   1a2bcd334-2134-1234 ... */
const secret = "" /*your secretId/password whic is like 1abc2Befghiujk12YZA.... */ 
const domain = "" /* your domainname/tenentId  */ 
const subscriptionId = "" /* your subcriptionId  */;
var client;

//an example to list resource groups in a subscription
msRestAzure.loginWithServicePrincipalSecret(clientId, secret, domain).then((creds) => {
  //client = new AzureServiceClient(creds);

client = new computeManagementClient(creds, subscriptionId);
client.virtualMachineImages.list('westus', 'MicrosoftWindowsServer', 'WindowsServer', '2012-R2-Datacenter', function(err, result, request, response) {
   if (err) console.log(err);
   console.log(result);
 });
});