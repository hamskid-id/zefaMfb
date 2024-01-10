import { MapContainer, TileLayer, Marker,Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from "leaflet";
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png'
import MarkerClusterGroup from "./react-leaflet-markercluster";

export const ContactInputSection =()=>{
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
        iconRetinaUrl:iconRetinaUrl,
        iconUrl:iconUrl,
        shadowUrl: shadowUrl
    });
    
    return(
        <div className="bg-white lg:px-24 py-14 xl:px-24 md:px-4 sm:px-4 xs:px-2 grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 xxs:grid-cols-1 lg:gap-12 xl:gap-12 md:gap-2 sm:gap-2 xs:gap-2">
            <div className="h-[50vh] w-full">
                <MapContainer 
                    center={[6.697767, 3.342367]} 
                        zoom={13} 
                        scrollWheelZoom={false}
                        style={{ width: "100%", height: "100%" }}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <MarkerClusterGroup>
                        <Marker position={[6.697767, 3.342367 ]}>
                            <Popup>
                            27 Olambe Road, Olambe, Ifo LGA, Ogun State, Nigeria
                            </Popup>
                        </Marker>
                    </MarkerClusterGroup>
                    </MapContainer>
            </div>
            <form  target="_blank" action="https://formsubmit.co/webcontact@zefamfb.com" method="POST">
                <div className="flex flex-col justify-between">
                    <input type="hidden" name="_next" value="https://zefa.vercel.app/contact-thanks.html"/>
                    <input type="hidden" name="_subject" value="Contact Form Submission"/>
                    {
                        [
                            {
                                title:"name",
                                holder:"Enter your name",
                                type:"text",
                                label:"Name"
                            },{
                                title:"email",
                                holder:"Enter your email",
                                type:"email",
                                label:"Email"
                            },{
                                title:"subject",
                                holder:"Enter your subject",
                                type:"text",
                                label:"Subject"
                            }
                        ].map((info,index)=>{
                            const{
                                title,
                                holder,
                                type,
                                label
                            }=info;
                            return(
                                <div 
                                    className="mb-3 flex flex-col justify-start"
                                    key={index}
                                >
                                    <label
                                        htmlFor={title}
                                        className="pointer-events-none max-w-[90%] origin-[0_0] truncate leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-black peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-black"
                                        >{label}
                                    </label>
                                    <input
                                        type={type}
                                        required
                                        className="peer block text-black  w-full rounded border bg-transparent px-3 py-[0.37rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-black data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                        id={title}
                                        name={title}
                                        placeholder={holder} 
                                    />
                                </div>
                            )
                        })
                    }
                        <div 
                            className="mb-3 flex flex-col justify-start"
                        >
                            <label
                                htmlFor="message"
                                className="pointer-events-none max-w-[90%] origin-[0_0] truncate leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-black peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-black"
                                >Message
                            </label>
                            <textArea
                                type="text"
                                required
                                className="peer block text-black  w-full rounded border bg-transparent px-3 py-[0.37rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-black data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                id="message"
                                name="message"
                                placeholder="Write your message..." 
                            ></textArea>
                        </div>
                    </div>
                    <div>
                    <button 
                        type="submit"
                        className="bg-green text-white rounded-md p-4 text-md cursor w-full text-center">Contact Us
                    </button>
                </div>
                </form>
        </div>
    )
}