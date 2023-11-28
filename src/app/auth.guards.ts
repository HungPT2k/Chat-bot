// import { Injectable } from "@angular/core";
// import {
//   Router,
//   ActivatedRouteSnapshot,
//   RouterStateSnapshot,
//   UrlTree,
// } from "@angular/router";
// import { AuthenticationService } from "../service";

// @Injectable({ providedIn: "root" })
// export class AuthGuard extends KeycloakAuthGuard {
//   public coreConfig: any;
//   constructor(
//     protected readonly _router: Router,
//     protected readonly _keycloak: KeycloakService,
//     private _authenticationService: AuthenticationService
//   ) {
//     super(_router, _keycloak);
//   }

//   async isAccessAllowed(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): Promise<boolean | UrlTree> {
//     if (!this.authenticated) {
//       //Kiểm tra đăng nhập, chưa thì gọi login và chuyển về trang mặc định
//       this._authenticationService.logout();
//       await this._keycloak.login({
//         redirectUri: window.location.origin + "/e-cabinet" + state.url,
//       });
//     }
//     //roles yêu cầu của route
//     const requiredRoles = route.data.roles;
//     console.log("role", requiredRoles);

//     //Kiểm tra requiredRoles
//     if (!(requiredRoles instanceof Array) || requiredRoles.length === 0) {
//       return true;
//     } else {
//       if (!this.roles || this.roles.length === 0) {
//         return false;
//       }
//     }
//     const authenticated = requiredRoles.some((role) =>
//       this.roles.includes(role)
//     );
//     //Nếu không có quyền thì chuyển sang trang báo lỗi
//     if (!authenticated) {
//       this.router.navigate(["/pages/miscellaneous/not-authorized"]);
//     } else {
//       const currentUser = this._authenticationService.currentUserValue;
//       //Kiểm tra đã tồn tại currentUser chưa, chưa có thì cập nhật
//       if (currentUser != null) {
//         // đã tồn tại currentUser
//         if (currentUser.isNewUser) {
//           //isNewUser is true, chuyển sang trang update user
//           this._router.navigate(["/pages/authentication/update-user-info"]);
//         }
//       } else {
//         // chưa có thì setCurrentUser, dùng bất đồng bộ để chạy setCurrentUser trước
//         await this._authenticationService.setCurrentUser();
//       }
//     }
//     //Trả về kết quả và trả lại trang chủ mặc định
//     return authenticated;
//   }
// }
