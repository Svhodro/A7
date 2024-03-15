import React from "react";
function Card() {
    return (
        <>
            <div className="card w-80 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body  text-left ">
                    <p className="font-bold">Spaghetti Bolognese</p>
                    <p>Classic Italian pasta dish with savory meat
                        sauce.</p>
                        <hr className="w-[95%]"/>
                        <p className="font-bold ">Ingredients: 6</p>
                        <ol className="list-disc list-inside text-left">
                            <li>500g ground beef</li>
                            <li>1 onion, choppef</li>
                            <li>2 cloves garlic, minced</li>
                        </ol>
                        <hr className="w-[95%] "/>
                        <div className="flex gap-4 justify-between">
                            <div>
                                <p>30 minutes</p>
                            </div>
                            <div>
                                <p>600 calories</p>
                            </div>
                        </div>
                    <div className="card-actions">
                    <button class="btn btn-accent">Want to Cook</button>
                    </div>
                </div>
            </div>        
        </>
    )
}
export default Card