// import React from 'react'

// export default function CreateListing() {
//   return (
//     <main className='p-3 max-w-4xl mx-auto '>
//       <h1 className='text-3xl font-semibold text-center my-7'>Create Listing</h1>
//       <form className='flex flex-col sm:flex-row gap-4'>
//           <div className='flex flex-col gap-4 flex-1'>
//             <input type='text' placeholder='Name' className='border p-3 rounded-lg' id='name' maxLength='62' minLength='10' required/>
//             <textarea type='text' placeholder='Description' className='border p-3 rounded-lg' id='desciption' required/>
//             <input type='text' placeholder='Address' className='border p-3 rounded-lg' id='address' required/>
//             <div className='flex gap-6 flex-wrap'>
//               <div className='flex gap-2'>
//               <input type='checkbox' id='sale' className='w-5' />
//               <span>Sell</span>
//               </div>
//               <div className='flex gap-2'>
//               <input type='checkbox' id='rent' className='w-5' />
//               <span>Rent</span>
//               </div>
//               <div className='flex gap-2'>
//               <input type='checkbox' id='parking' className='w-5' />
//               <span>Parking Spot</span>
//               </div>
//               <div className='flex gap-2'>
//               <input type='checkbox' id='furnished' className='w-5' />
//               <span>Furnished</span>
//               </div>
//               <div className='flex gap-2'>
//               <input type='checkbox' id='offer' className='w-5' />
//               <span>Offer</span>
//               </div>
//             </div>
//             <div className='flex flex-wrap gap-6'>
//               <div className='flex items-center gap-2'>
//                 <input type='number' id='bedrooms' min='1' max='10' required className='p-3 border-gray-300 rounded-lg'/>
//                 <p>Beds</p>
//               </div>
//               <div className='flex items-center gap-2'>
//                 <input type='number' id='bathrooms' min='1' max='10' required className='p-3 border-gray-300 rounded-lg'/>
//                 <p>Baths</p>
//               </div>
//               <div className='flex items-center gap-2'>
//                 <input type='number' id='regularPrice' min='1' max='10' required className='p-3 border-gray-300 rounded-lg'/>
//                 <div className='flex flex-col items-center'>
//                 <p>Regular Price</p>
//                 <span className='text-xs'>($ / month)</span>
//                 </div>
//               </div>
//               <div className='flex items-center gap-2'>
//                 <input type='number' id='discountPrice' min='1' max='10' required className='p-3 border-gray-300 rounded-lg'/>
//                 <div className='flex flex-col items-center'>
//                 <p>Discounted Price</p>
//                 <span className='text-xs'>($ / month)</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className='flex flex-col gap-4 flex-1'>
//             <p className='font-semibold'>Images:
//               <span className='font-normal text-gray-600 ml-2'>
//                 The first image will be the cover ( max6 )
//               </span>
//             </p>
//             <div className='flex-gap-4'>
//               <input className='p-3 border-gray-300 rounded w-full' type='file' id='images' accept='image/*' multiple />
//               <button className='p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity:80'>Upload</button>
//             </div>
//             <button className='p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>Create Listing</button>
//           </div>
          
//       </form>
//     </main>
//   )
// }
import React from 'react';

export default function CreateListing() {
  return (
    <main className='p-6 max-w-4xl mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-8'>Create Listing</h1>
      <form className='flex flex-col lg:flex-row gap-8'>
        <div className='flex flex-col gap-6 flex-1'>
          <input
            type='text'
            placeholder='Name'
            className='border p-3 rounded-lg'
            id='name'
            maxLength='62'
            minLength='10'
            required
          />
          <textarea
            type='text'
            placeholder='Description'
            className='border p-3 rounded-lg'
            id='description'
            required
          />
          <input
            type='text'
            placeholder='Address'
            className='border p-3 rounded-lg'
            id='address'
            required
          />
          <div className='flex flex-wrap gap-6'>
            {[
              { id: 'sale', label: 'Sell' },
              { id: 'rent', label: 'Rent' },
              { id: 'parking', label: 'Parking Spot' },
              { id: 'furnished', label: 'Furnished' },
              { id: 'offer', label: 'Offer' }
            ].map((item) => (
              <div className='flex items-center gap-2' key={item.id}>
                <input type='checkbox' id={item.id} className='w-5 h-5' />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
          <div className='flex flex-wrap gap-6'>
            {[
              { id: 'bedrooms', label: 'Beds', min: 1, max: 10 },
              { id: 'bathrooms', label: 'Baths', min: 1, max: 10 },
              { id: 'regularPrice', label: 'Regular Price', min: 1, max: 10000 },
              { id: 'discountPrice', label: 'Discounted Price', min: 1, max: 10000 }
            ].map((item) => (
              <div className='flex items-center gap-2' key={item.id}>
                <input
                  type='number'
                  id={item.id}
                  min={item.min}
                  max={item.max}
                  required
                  className='p-3 border-gray-300 rounded-lg'
                />
                <div className='flex flex-col items-center'>
                  <p>{item.label}</p>
                  {item.id !== 'bedrooms' && item.id !== 'bathrooms' && (
                    <span className='text-xs'>($ / month)</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='flex flex-col gap-6 flex-1'>
          <p className='font-semibold'>
            Images:
            <span className='font-normal text-gray-600 ml-2'>
              The first image will be the cover (max 6)
            </span>
          </p>
          <div className='flex flex-col gap-4'>
            <input
              className='p-3 border-gray-300 rounded w-full'
              type='file'
              id='images'
              accept='image/*'
              multiple
            />
            <button className='p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity:80'>
              Upload
            </button>
          </div>
          <button className='p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
            Create Listing
          </button>
        </div>
      </form>
    </main>
  );
}

