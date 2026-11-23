package in.project.CarRentalApplication.service.customer;

import in.project.CarRentalApplication.dto.CarDto;
import in.project.CarRentalApplication.entity.Car;
import in.project.CarRentalApplication.repository.CarRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CustomerServiceImpl implements CustomerService{

    private final CarRepository carRepository;

    @Override
    public List<CarDto> getAllCars() {
        return carRepository.findAll()
                .stream()
                .map(Car::getCarDto)
                .collect(Collectors.toList());
    }
}
