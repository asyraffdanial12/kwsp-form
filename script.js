document.getElementById('printButton').addEventListener('click', function() {
    // Create a new jsPDF instance
    var doc = new jsPDF();

    // Loop through each square and add its content to the PDF
    var squares = document.querySelectorAll('.square');
    squares.forEach(function(square, index) {
        var content = square.innerHTML;
        // Add content to PDF
        if (index > 0) {
            doc.addPage();
        }
        doc.text(content, 10, 10); // Adjust position as needed
    });

    // Save the PDF file
    doc.save('KWSP_Form.pdf');
});

// Function to handle checkbox click events
    function handleCheckboxClick(checkboxName, checkboxId) {
      	// Uncheck all checkboxes
      		uncheckAllCheckboxes(checkboxName);

      	// Check the clicked checkbox
      		document.getElementById(checkboxId).checked = true;
    		}
		// Function to uncheck all checkboxes
    		function uncheckAllCheckboxes(checkboxName) {
      		var checkboxes = document.querySelectorAll('[name="' + checkboxName + '"]');
      		checkboxes.forEach(function(checkbox) {
        		checkbox.checked = false;
      		});
    	}

// Initialize SignaturePad
   		var canvas = document.getElementById('signatureCanvas');
    		var signaturePad = new SignaturePad(canvas);

    		// Function to clear the signature
    		function clearSignature() {
      			signaturePad.clear();
    		}

    		// Add an event listener to update the hidden input with signature data
    		signaturePad.onEnd = function () {
      		document.getElementById('signature').value = signaturePad.toDataURL();
    	};

// generate pdf
let button = document.getElementById("printButton");
let makepdf = document.getElementById("makepdf");

button.addEventListener("click", function () {
  // Configuration for html2pdf
  const options = {
    margin: 10,
    filename: 'e-formKWSP.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: {
      unit: 'mm',
      format: [245, 400], // Set width and height to match .square class dimensions
      orientation: 'portrait'
    }
  };

  // Generate PDF directly from the document body
  html2pdf().from(makepdf).set(options).save();
});