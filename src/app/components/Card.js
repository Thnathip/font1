import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';

export default function CardsPage() {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">All</h1>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card">
            <Image src="/ad3.png" className="card-img-top" width={1000} height={1000} alt="Card 1" />
            <div className="card-body">
              <h5 className="card-title">ADIDAS</h5>
              <p className="card-text">
              SOON...
              </p>
              <a href="#" className="btn btn-primary">Click</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <Image src="/aaa.png" className="card-img-top" width={1000} height={1000} alt="Card 2" />
            <div className="card-body">
              <h5 className="card-title">
              NIKE</h5>
              <p className="card-text">
                 SOON...
              </p>
              <a href="#" className="btn btn-primary">Click</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <Image src="/pm2.png" className="card-img-top" width={1000} height={1000} alt="Card 3" />
            <div className="card-body">
              <h5 className="card-title">PUMA</h5>
              <p className="card-text">
              SOON...
              </p>
              <a href="#" className="btn btn-primary">Click</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <Image src="/11.png" className="card-img-top" width={1000} height={1000} alt="Card 3" />
            <div className="card-body">
              <h5 className="card-title">NEW BALANCE</h5>
              <p className="card-text">
              SOON...
              </p>
              <a href="#" className="btn btn-primary">Click</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <Image src="/47.png" className="card-img-top" width={1000} height={1000} alt="Card 3" />
            <div className="card-body">
              <h5 className="card-title">PAN</h5>
              <p className="card-text">
             SOON...
              </p>
              <a href="#" className="btn btn-primary">Click</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <Image src="/20.jfif" className="card-img-top" width={1000} height={1000} alt="Card 3" />
            <div className="card-body">
              <h5 className="card-title">WINGZ</h5>
              <p className="card-text">SOON...
              
              </p>
              <a href="#" className="btn btn-primary">Click</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
