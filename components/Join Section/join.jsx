import ServiceComponent from "../Services Section/ServiceComponent";

function Join() {

    return (
        <div className="mt-32">
            <ServiceComponent 
            title={"Join the Ijikod adventure"}
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat"
            src={"/joinImage.svg"}
            />

            <div className="card mt-32">
            <h3 className="text-center">
                Think you have what it takes to be an Ijikoder?
            </h3>
            <div className="mt-32 flex items-center justify-center">
          <button className="dark">
              See Job Openings
              </button>
        </div>
            </div>
        </div>
    )
}
export default Join;