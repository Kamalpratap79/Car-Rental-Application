package in.project.CarRentalApplication.service.admin;

import in.project.CarRentalApplication.dto.CarDto;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
public interface AdminService {

    boolean postCar(CarDto carDto) throws IOException;
}
