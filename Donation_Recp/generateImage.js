function generateID() {
  // Get form data
  const form = document.getElementById('id-form')
  const id = $('#id').val();
  const volName = $('#vol-name').val();
  const dob = $('#dob').val();
  const formattedDob = formatDate(dob);
  const ph = $('#ph').val();
  const bloodGrp = $('#blood-grp').val();
  const validityInput = $('#validity').val(); // Assuming validity is in the format 'YYYY-MM'
  const [year, month] = validityInput.split('-');

const formattedValidity = `${month}-${year}`;
 
  const photo = document.getElementById('croppedImage');

  if (form.checkValidity()) {
    // Create image with placeholders
    const baseImage = new Image();
    baseImage.src = 'Images/base_image_id.png'; // Replace with your base image URL

    baseImage.onload = function () {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');

      canvas.width = baseImage.width;
      canvas.height = baseImage.height;

      // Draw base image
      context.drawImage(baseImage, 0, 0);

      // Customize text style
      context.fillStyle = '#282729';
      context.font = 'bold 25px Quicksand';

      // Draw text on the image
      context.fillText(`${id}`, 310, 682);
      context.fillText(`${formattedDob}`, 310, 732);
      context.fillText(`${ph}`, 310, 782);
      context.fillText(`${bloodGrp}`, 310, 832);
      context.fillText(`${formattedValidity}`, 310, 882);

      context.font = 'bold 45px Quicksand';
      context.textAlign = 'center'; // Set text alignment to center

      // Calculate the center position based on canvas width
      const centerX = canvas.width / 2;
      context.fillText(`${volName}`, centerX, 600);

      const photoWidth = 335; // Adjust the width as needed
      const photoHeight =335; // Adjust the height as needed
      context.drawImage(photo, 130,220, photoWidth, photoHeight);

      // Create a link for downloading
      const downloadLink = document.createElement('a');
      downloadLink.href = canvas.toDataURL('image/png'); // Convert canvas to data URL
      downloadLink.download = `${volName}_ID.png`; // Set the download filename

      // Create a button to trigger the download
      const downloadButton = document.createElement('button');
      downloadButton.className = 'btn btn-success btn-lg mt-3 me-3'
      downloadButton.textContent = 'Download ID';
      downloadButton.type = 'button';
      downloadButton.onclick = function () {
        // Trigger the download
        downloadLink.click();

        history.replaceState({}, document.title, '/working.html');
        window.location.reload();
      };

      downloadButton.innerHTML = `<i class="bi bi-arrow-down"></i> Download Receipt`
      downloadButton.addEventListener('click', function () {
        downloadLink.click(); // Simulate a click on the hidden link
      });

      const img = document.createElement('img');
      img.src = canvas.toDataURL('image/png'); // Set the source of the image
      img.alt = 'Generated Image';

      const aspectRatio = canvas.width / canvas.height

      // Set the dimensions maintaining the aspect ratio
      const maxWidth = 1000; // Set your maximum width
      const maxHeight = 707; // Set your maximum height

      if (aspectRatio > 1) {
        img.width = maxWidth;
        img.height = maxWidth / aspectRatio;
      } else {
        img.height = maxHeight;
        img.width = maxHeight * aspectRatio;
      }

      // Display the img tag in the previewContainer
      const previewContainer = document.getElementById('previewContainer');
      previewContainer.innerHTML = '';
      // previewContainer.height = auto;
      // previewContainer.width = auto;
      previewContainer.appendChild(img);
      // previewContainer.appendChild(downloadButton);

      // Append the download button to the document
      form.appendChild(downloadButton);
    };

    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
    modal.style.display = "block";
    span.onclick = function () {
      modal.style.display = "none";
    }
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }

  }
  else {
    alert('Please fill in all required fields.');
  }
}

function generateImage() {
  // Get form data
  const form = document.getElementById('gform')
  const name = document.getElementById('name').value;
  const date = document.getElementById('date').value;
  const formattedDate = formatDate(date);
  const email = document.getElementById('email').value;
  const address = document.getElementById('address').value;
  const amount = document.getElementById('amount').value;

  if (form.checkValidity()) {


    // Create image with placeholders
    const baseImage = new Image();
    baseImage.src = 'Images/base_image_receipt.png'; // Replace with your base image URL

    baseImage.onload = function () {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');

      canvas.width = baseImage.width;
      canvas.height = baseImage.height;

      // Draw base image
      context.drawImage(baseImage, 0, 0);

      // Customize text style
      context.fillStyle = '#294089';
      //   context.font = '20px Arial';
      context.font = 'bold 80px Quicksand';

      // Draw text on the image
      context.fillText(`${name}`, 145, 610);

      context.font = 'bold 25px Quicksand';
      context.fillText(`${email}`, 900, 590);

      context.font = 'bold 25px Quicksand';
      context.fillText(`${address}`, 900, 630);

      context.font = 'bold 43px Quicksand';
      context.fillText(`${amount}`, 1060, 1456);

      context.fillStyle = '#fff';
      context.font = '30px Quicksand';
      context.fillText(`${formattedDate}`, 250, 369);

      // // Display the generated image
      // const imageContainer = document.getElementById('imageContainer');
      // imageContainer.innerHTML = '';
      // imageContainer.appendChild(canvas);

      // Create a link for downloading
      const downloadLink = document.createElement('a');
      downloadLink.href = canvas.toDataURL('image/png'); // Convert canvas to data URL
      downloadLink.download = `${name}_receipt.png`; // Set the download filename

      // Create a button to trigger the download
      const downloadButton = document.createElement('button');
      downloadButton.className = 'btn btn-success btn-lg mt-3 me-3'
      downloadButton.textContent = 'Download Receipt';
      downloadButton.type = 'button';

      downloadButton.innerHTML = `<i class="bi bi-arrow-down"></i> Download Receipt`
      downloadButton.addEventListener('click', function () {
        downloadLink.click(); // Simulate a click on the hidden link
        history.replaceState({}, document.title, '/working.html');
        window.location.reload();
      });

      const img = document.createElement('img');
      img.src = canvas.toDataURL('image/png'); // Set the source of the image
      img.alt = 'Generated Image';

      const aspectRatio = canvas.width / canvas.height

      // Set the dimensions maintaining the aspect ratio
      const maxWidth = 1000; // Set your maximum width
      const maxHeight = 707; // Set your maximum height

      if (aspectRatio > 1) {
        img.width = maxWidth;
        img.height = maxWidth / aspectRatio;
      } else {
        img.height = maxHeight;
        img.width = maxHeight * aspectRatio;
      }

      // Display the img tag in the previewContainer
      const previewContainer = document.getElementById('previewContainer');
      previewContainer.innerHTML = '';
      // previewContainer.height = auto;
      // previewContainer.width = auto;
      previewContainer.appendChild(img);
      // previewContainer.appendChild(downloadButton);

      // Append the download button to the document
      form.appendChild(downloadButton);
    };

    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
    modal.style.display = "block";
    span.onclick = function () {
      modal.style.display = "none";
    }
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }

  }
  else {
    alert('Please fill in all required fields.');
  }
}


function formatDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1; // Month is zero-based
  const year = date.getFullYear();

  // Pad single-digit day and month with leading zero
  const formattedDay = day < 10 ? '0' + day : day;
  const formattedMonth = month < 10 ? '0' + month : month;

  // Return the formatted date string
  return formattedDay + '-' + formattedMonth + '-' + year;
}
