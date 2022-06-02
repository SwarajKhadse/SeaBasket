import React from 'react'
import Shopcard from './Shopcard';
function Read() {
    const firstRow = [
        "The right quality",
        "The right time",
        "The basis of a balanced diet",
        
      ];
    //   const secondRow = [
    //     "Nulla amet ut massa sapien nibh. Sed quis sollicitudin ut senectus nisl adipiscing posuere et a. Tincidunt consectetur sapien pellentesque vitae, nulla vitae sed feugiat. Consectetur hendrerit massa felis, et. Cursus tortor ut fames sapien a vulputate amet malesuada.",
    //     "Nulla amet ut massa sapien nibh. Sed quis sollicitudin ut senectus nisl adipiscing posuere et a. Tincidunt consectetur sapien pellentesque vitae, nulla vitae sed feugiat. Consectetur hendrerit massa felis, et. Cursus tortor ut fames sapien a vulputate amet malesuada.",
    //     "Nulla amet ut massa sapien nibh. Sed quis sollicitudin ut senectus nisl adipiscing posuere et a. Tincidunt consectetur sapien pellentesque vitae, nulla vitae sed feugiat. Consectetur hendrerit massa felis, et. Cursus tortor ut fames sapien a vulputate amet malesuada."];
  return (
    <>
    <h1 className='text-center fw-bold 'style={{
      marginTop:"8rem",
      marginBottom:"5rem",
      fontSize:"3rem"
     
    }}>HAVE A READ</h1> 
    {firstRow.map((title) => {
              return (
                <div className=" mt-3">
                  <Shopcard title={title} />
                </div>
              );
            })}
             {/* {secondRow.map((description) => {
              return (
                <div className="col-md-4">
                  <Shopcard title={description} />
                </div>
              );
            })} */}
    </>
  )
}

export default Read