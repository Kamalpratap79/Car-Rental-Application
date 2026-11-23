package in.project.CarRentalApplication.service.admin;

import in.project.CarRentalApplication.dto.CarDto;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;

@Service
public interface AdminService {

    boolean postCar(CarDto carDto) throws IOException;

    List<CarDto> getAllCars();

    void deleteCar(Long id);

    CarDto getCarById(Long id);

    boolean updateCar(Long CarId, CarDto carDto) throws IOException;
}
