<script>
fetch('https://www.flysas.com/en/')                
.then(res => {
	if(res.ok){
	console.log("Connection OK");
	}else{
	console.log("There is an issue connecting to the server");
	}   
})				
.catch(error => {
throw(error);
})
</script>				
				