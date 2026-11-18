package in.project.CarRentalApplication.service;

import in.project.CarRentalApplication.dto.SignupRequest;
import in.project.CarRentalApplication.dto.UserDto;

public interface AuthService {

    UserDto createCustomer(SignupRequest signupRequest);

    boolean hasCustomerWithEmail(String email);
}
