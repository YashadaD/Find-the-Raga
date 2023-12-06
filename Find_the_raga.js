

function Find_the_raga() {

    Test = document.getElementById("Test")
    var Name = document.getElementById("Name").value;
    Thaat = document.getElementById("Thaat").value;
    Rasa = document.getElementById("Rasa").value;
    Time = document.getElementById("Time").value;
    Aroha = document.getElementById("Aroha").value;
    Avaroha = document.getElementById("Avaroha").value;
    
    Properties = ["Thaat" , "Rasa" , "Time" , "Aroha" , "Avaroha"]    
    
    Raga_list = ["Bhairav", "Yaman", "Hansadhwani" , "Vrindavani_Sarang" , "Chandrakauns" , "Bhoopal_Todi" , "Jait" , "Bibhas" , " Bairagi_Bhairav" , "Deepavali" ]
    Final_ragas = [] 
    class Raga {
        constructor(Raga_Thaat, Raga_Rasa , Raga_Time , Raga_Aroha , Raga_Avaroha) {
          this.Raga_Thaat = Raga_Thaat;
          this.Raga_Rasa = Raga_Rasa;
          this.Raga_Time = Raga_Time;
          this.Raga_Aroha = Raga_Aroha;
          this.Raga_Avaroha = Raga_Avaroha;
        }
      }
      
      const Bhairav = new Raga("Bhairav", "Serious", "Morning" , "S R_ G M P D_ N S", "S N D_ P M G R_ S");
      const Yaman = new Raga("Kalyan" , "Navarasa" , "Evening" , "N R G M' D N S" , "S N D P M' G R S")
      const Hansadhwani = new Raga("Bilawal" , "Devotional" , "Evening" , "S R G P N S" , "S N P G R S")
     const Vrindavani_Sarang = new Raga("Kafi" , "Chanchal" , "Afternoon" , "S R M P N S" , "S N_ P M R S") 
    const Chandrakauns = new Raga("Undefined" , "Mysterious" , "Night" , "S R G P N S" , "S N P G R S")
    const Bhoopal_Todi = new Raga("Bhairavi" , "Calm" , "Morning" , "S R_ G_ P D_ S" , "S D_ P G_ R_ S")
   const Jait = new Raga("Marwa" , "Serious" , "Evening" , "S R_ G P d S" , "S D P G R_ S")
    const Bibhas = new Raga("Bhairav" , "Serious" , "Morning" , "S R_ G P D_ S" , "S D_ P G R_ S")
  const Bairagi_Bhairav = new Raga("Bhairav" , "Devotional" , "Morning" , "S R_ M P N_ S" , "S N_ P M R_ S")
   const Deepavali = new Raga("Undefined" , "Devotional" , "Deepavali" , "N R G M M' D N S" , "S N D P M' G R S")

     if (Name != "") {
            window.open( Name + ".html")
        }
    
    
     else {
             
        for (let x = 0; x < Properties.length; x++) {
            const Property = Properties[x];
        
            for (i = 0, len = Raga_list.length, text = ""; i < len; i++) {
                text = Raga_list[i];

                
                
                    Property_str = (text + ".Raga_" + Property)

                    if (eval(Property) != "") {
                        if (eval(Property) == eval(Property_str)) {
                           Final_ragas.push(Raga_list[i])
                        }

                    

                    }
                   
                       
            }
            
             
            }
            
           // if(Final_ragas.length == 1){
            //    
            //}
            Test.innerHTML = (Final_ragas)
            
            }
            
            
        
        
    }
       
    