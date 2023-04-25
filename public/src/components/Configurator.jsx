import { tapeColors, useCustomization, wheelColors } from "../contexts/Customization";

const Configurator = () => {
    const {tapeColor, setTapeColor, wheelColor, setWheelColor} = useCustomization();
    
    return ( 
    
    <div className="configurator">

        <div className="configurator_section">
            <div className="configurator_section_title">
                Skateboard Color
            </div>
            <div className="configurator_section_values">
                { tapeColors.map((item, index) => (
                <div 
                    key={index} 
                    className={`item ${item.color === tapeColor.color ? "item--active" : ""}`}
                    onClick={() => setTapeColor(item)}>
                    <div className="item_dot" style={{
                        backgroundColor: item.color,

                    }} />
                    <div className="item_label">{item.name}</div>
                </div>
                ))
}   
            </div>
        </div>
        <div className="configurator_section">
            <div className="configurator_section_title">
                Wheel Color
            </div>
            <div className="configurator_section_values">
                { wheelColors.map((item, index) => (
                <div 
                    key={index} 
                    className={`item ${item.color === wheelColor.color ? "item--active" : ""}`}
                    onClick={() => setWheelColor(item)}>
                    <div className="item_dot" style={{
                        backgroundColor: item.color,

                    }} />
                    <div className="item_label">{item.name}</div>
                </div>
                ))
}   
            </div>
            {/* <a className="btn">Proceed</a> */}
            <button className="btn">Proceed</button>
        </div>
    </div>
   );
};

export default Configurator;