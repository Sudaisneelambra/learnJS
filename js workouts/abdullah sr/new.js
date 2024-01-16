// function swap(arr, xp, yp)
// {
//     console.log(arr);
// 	var temp = arr[xp];
// 	arr[xp] = arr[yp];
// 	arr[yp] = temp;
   
// }

// // An optimized version of Bubble Sort
// function bubbleSort( arr, n)
// {
// var i, j;
// for (i = 0; i < n-1; i++)
// {
// 	for (j = 0; j < n-i-1; j++)
// 	{
// 		if (arr[j] > arr[j+1])
// 		{
// 		swap(arr,j,j+1);
		
// 		}
// 	}

// }
// }

// /* Function to print an array */

// function printArray(arr, size)
// {
// 	var i;
// 	for (i=0; i < size; i++)
// 		document.write(arr[i]+ " ");
// 	document.write("\n");
// }


// // Driver program to test above functions
// var arr = [5, 1, 4, 2, 8];
// 	var n = 5;
// 	document.write("UnSorted array: \n");
// 	printArray(arr, n);

// 	bubbleSort(arr, n);
// 	document.write("Sorted array: \n");
// 	printArray(arr, n);








// Javascript program for insertion sort

// Function to sort an array using insertion sort

function insertionSort(arr, n)
{
	let i, key, j;
	for (i = 1; i < n; i++)
	{
		key = arr[i];
		j = i - 1;

		/* Move elements of arr[0..i-1], that are
		greater than key, to one position ahead
		of their current position */
		while (j >= 0 && arr[j] > key)
		{
			arr[j + 1] = arr[j];
			j = j - 1;
		}
		arr[j + 1] = key;
	}
}

// A utility function to print an array of size n

function printArray(arr, n)
{
	let i;
	for (i = 0; i < n; i++)
		document.write(arr[i] + " ");
	document.write("<br>");
}

// Driver code
	let arr = [12, 11, 13, 5, 6 ];
	let n = arr.length;

	insertionSort(arr, n);
	printArray(arr, n);
	
// This code is contributed by Mayank Tyagi


